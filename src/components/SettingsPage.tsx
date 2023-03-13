// main imports of elements and dependencies
import { SettingsStore } from 'enmity/api/settings';
import { FormDivider, FormRow, FormSection, FormSwitch, ScrollView } from 'enmity/components';
import { bulk, filters } from 'enmity/metro';
import { Constants, React, Storage, StyleSheet, Toasts } from 'enmity/metro/common';
import Credits from '../common/credits';
import { check_for_updates, clipboard_toast, debug_info, Icons } from '../common';

// main settingsStore and manifest interface
interface SettingsProps {
  settings: SettingsStore;
  manifest: object;
  children?: any;
}

// main declaration of modules being altered by the plugin
const [
  Router, // used to open a url externally
  Clipboard // used to copy the dl link to keyboard
] = bulk(
  filters.byProps('transitionToGuild'),
  filters.byProps('setString')
);

// icon and styles
const styles = StyleSheet.createThemedStyleSheet({
  bottom_padding: {
    paddingBottom: 25
  },
  icon: {
    color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
  },
  item: {
    color: Constants.ThemeColorMap.TEXT_MUTED
  },
  text_container: {
    display: 'flex',
    flexDirection: 'column'
  }
}); // main stylesheet

export default ({ manifest, children }: SettingsProps) => {
  return <ScrollView>
    <Credits manifest={manifest} /* main credits gui, created from scratch exclusively for dislate */ />
    {children}
    {/* @ts-ignore */}
    <FormSection title="Utility">
      <FormRow
        /* @ts-ignore */
        label='Copy Debug Info'
        subLabel={`Copy useful debug information of ${manifest['name']} to clipboard.`}
        /* @ts-ignore */
        leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Debug} />}
        trailing={FormRow.Arrow}
        onPress={async function () {
          Clipboard.setString(await debug_info(manifest['name'], manifest['version'], manifest['build']));
          clipboard_toast('plugin debug information');
        }}
      />
      <FormDivider />
      <FormRow
        /* @ts-ignore */
        label='Clear Device List Cache'
        subLabel={`Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.`}
        /* @ts-ignore */
        leading={<FormRow.Icon style={styles.icon} source={Icons.Delete} />}
        trailing={FormRow.Arrow}
        onPress={async function () {
          await Storage.removeItem('device_list') // removes the item and waits for promise resolve
          Toasts.open({
            content: `Cleared device list storage.`,
            source: Icons.Success
          }); // declares success
        }}
      />
    </FormSection>
    {/* @ts-ignore */}
    <FormSection title="Source">
      <FormRow
        /* @ts-ignore */
        label="Check for Updates"
        subLabel={`Check for any plugin updates for ${manifest['name']}.`}
        /* @ts-ignore */
        leading={<FormRow.Icon style={styles.icon} source={Icons.Copy} />}
        trailing={FormRow.Arrow}
        onPress={() => {
          check_for_updates({ manifest })
        }}
      />
      <FormDivider />
      <FormRow
        /* @ts-ignore */
        label="Source"
        subLabel={`View ${manifest['name']} source code`}
        /* @ts-ignore */
        leading={<FormRow.Icon style={styles.icon} source={Icons.Open} />}
        trailing={FormRow.Arrow}
        onPress={() => {
          Router.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${manifest['name']}`)
        }}
      />
    </FormSection>
    {/* @ts-ignore */}
    <FormRow style={styles.bottom_padding} label={
      `Plugin Version: ${manifest['version']}
Plugin Build: ${(manifest['build']).split('-').pop()}`
    } />
  </ScrollView>
};
