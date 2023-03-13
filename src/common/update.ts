import { name, links, version, build } from '../../manifest.json';
import { Dialog } from 'enmity/metro/common';
import { reload } from 'enmity/api/native';
import tryCallback from './try_callback';

/**
 * Checks if any updates are available.
 * @returns {void void}
 */
async function checkForUpdates(): Promise<void> {
    await tryCallback(async function () {
        const url = `${links.source}?${Math.floor(Math.random() * 1001)}.js`;

        const res: Response = await fetch(url);
        const content: string = await res.text();

        /**
         * Gets the external version and build from the repo.
         * @param {string} externalVersion: The current latest version externally. Example: @arg {1.1.5}
         * @param {string} externalBuild: The current latest build externally. Example: @arg {patch-1.2.8}. This would be then shortened into a simpler string: @arg {1.2.8}
         */
        const potentialExternalVersion = content.match(/\d+\.\d+\.\d+/g)
        const potentialExternalBuild = content.match(/patch-\d+\.\d+\.\d+/)

        if (!potentialExternalVersion && !potentialExternalBuild)
            return failureUpdate(name, [version, build]);

        const externalVersion = potentialExternalVersion && potentialExternalVersion[0];
        const externalBuild = potentialExternalBuild && potentialExternalBuild[0]

        if (externalVersion && (externalVersion != version)) return showUpdateDialog(url, externalVersion, 'version');
        if (externalBuild && (externalBuild != build)) return showUpdateDialog(url, externalBuild.split("-")[1], "build");
        return noUpdates(name, [version, build]);
    }, [links, version, build], name, 'checking if latest version at', 'the async check for updates callback');
}

/**
 * Shows a dialog that a new update is a available
 * @param {string} url: The url to update to the newer version
 * @param {string} updateLabel: The new version/build label to display in the dialogs.
 * @param {enum} updateType: The type of update, which is an @arg enum and has 2 states being @arg version and @arg build.
 * @returns {void}
 */
const showUpdateDialog = (url: string, updateLabel: string, updateType: string): void => {
    Dialog.show({
        title: 'Update found',
        body: `A newer ${updateType} is available for ${name}. ${
            updateType == 'build' 
                ? `\nThe version will remain at ${version}, but the build will update to ${updateLabel}.` 
                : ''
        }\nWould you like to install ${updateType} \`${updateLabel}\` now?`,
        confirmText: 'Update',
        cancelText: 'Not now',
        onConfirm: (): Promise<void> => installPlugin(url, updateLabel, updateType),
    });
};

/**
 * Opens a dialog showing that there are no updates available for @arg PronounDB.
 * @param name: The name of the plugin, in this case its @arg PronounDB.
 * @param { version, hash }: This is an array of both the latest version and latest build hash, which are displayed in the @arg Dialog.
 * @returns {void}
 */
const noUpdates = (name: string, [version, hash]: string[]): void => {
    console.log(`[${name}] Plugin is on the latest update, which is version ${version} and build ${hash}`);
    Dialog.show({
        title: 'Already on latest',
        body: `${name} is already updated to the latest version.\nVersion: \`${version}\`\nBuild: \`${hash}\``,
        confirmText: 'Okay',
    });
};

/**
 * Opens a dialog showing that there is a failure to check for updates.
 * @param name: The name of the plugin, in this case its @arg PronounDB.
 * @param { version, hash }: This is an array of both the latest version and latest build hash, which are displayed in the @arg Dialog.
 * @returns {void}
 */
const failureUpdate = (name: string, [version, hash]: string[]): void => {
    console.log(`[${name}] Plugin failed to update to the latest version and build, remaining at ${version} and ${hash}`);
    Dialog.show({
        title: 'Failed',
        body: `${name} to find a new version or build.\nThe current versions will remain as follows:\nVersion: \`${version}\`\nBuild: \`${hash}\``,
        confirmText: 'Okay',
    });
};

/**
 * Install a plugin and open a new @arg Dialog asking to @arg reload Enmity.
 * @param {string} url: The URL of the plugin to install.
 * @param {string} type: The @arg version or @arg build which it has just updated to, provided when the function is called dynamically.
 * @param {updateType} updateType: The type of update which is being installed, options are @arg version and @arg build updates.
 * @returns {void}
 */
async function installPlugin(url: string, type: string, updateType: string): Promise<void> {
    await tryCallback(async function() {
        /**
         * The main function to install a plugin, inside of Enmity. This function is not exported as a member in the Enmity library, so I have to manually import it.
         * @param {string} url: The link which is used to install the plugin
         * @param {string} data: The returned data which shows the state of the installation.
         * @ts-ignore */
        window.enmity.plugins.installPlugin(url, ({ data }) => {
            data == 'installed_plugin' || data == 'overridden_plugin'
                ? Dialog.show({
                        title: `Updated ${name}`,
                        body: `Successfully updated to ${updateType} \`${type}\`. \nWould you like to reload Discord now?`,
                        confirmText: 'Reload',
                        cancelText: 'Not now',
                        onConfirm: (): void => reload(),
                    })
                : console.log(`[${name}] Plugin failed to update to ${updateType} ${type}.`);
        });
    }, [url, type, updateType], name, 'installing plugin at', 'new version available');
}

export default {
    checkForUpdates
};
