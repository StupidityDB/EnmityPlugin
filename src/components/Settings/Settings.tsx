import { version } from 'enmity/api/native';
import { get, set } from 'enmity/api/settings';
import { FormDivider, FormInput, FormRow, FormSwitch, ScrollView, Text, View } from 'enmity/components';
import { getByProps } from 'enmity/metro';
import { React } from 'enmity/metro/common';
import { Icons, Miscellaneous, Updater } from '../../common';
import styles from '../../common/StyleSheet';
import { SettingsProps } from '../../def';
import Credits from '../Dependent/Credits';
import SectionWrapper from '../Wrappers/SectionWrapper';
import { OAuth2Modal, showOAuth2Modal } from '../../common/RDBAPI';

const Router = getByProps("openURL", "transitionToGuild");
const optionalMargin = parseInt(version.split(".")[0]) > 163 ? 15 : 0;

export default ({ manifest }: SettingsProps) => {
  return <ScrollView>
    <Credits manifest={manifest} />
    <SectionWrapper label="Authentication">
      <View style={styles.formrowContainer}>
        <FormRow
          // @ts-ignore
          label="Authenticate with ReviewDB"
          subLabel="Open a modal to authenticate your account with the ReviewDB API."
          // @ts-ignore
          trailing={<FormRow.Arrow style={{ marginLeft: -optionalMargin }} />}
          // @ts-ignore
          leading={<FormRow.Icon source={Icons.Self} />}
          onPress={() => showOAuth2Modal({ pagePanel: OAuth2Modal })}
        />
        <FormDivider />
        <FormInput
          placeholder="Your token goes here"
          value={get(manifest.name, "rdbToken", "")}
          onChange={(value: string) => (/^[A-Za-z0-9]{30,32}$/.test(value)
            ? set(manifest.name, "rdbToken", value.trim())
            : set(manifest.name, "rdbToken", ""))}
          title="ReviewDB Authentication Token"
        />
      </View>
    </SectionWrapper>
    <SectionWrapper label="Preferences">
      <View style={styles.formrowContainer}>
        <FormRow
          label='Show warning'
          leading={<FormRow.Icon style={styles.icon} source={Icons.Warning} />}
          subLabel={`Display warning to be respectful to other users at the top of the review list`}
          onLongPress={() => Miscellaneous.displayToast('Shows a warning at the top of the reviews list reminding you to be respectful to other users.', 'tooltip')}
          trailing={() => <FormSwitch
              value={get(manifest.name, "showWarning", true)}
              onValueChange={(value) => set(manifest.name, "showWarning", value)}
          />}
        />
      </View>
    </SectionWrapper>
    <SectionWrapper label="Source">
      <View style={styles.formrowContainer}>
        <FormRow
          /* @ts-ignore */
          label="Check for Updates"
          subLabel={`Check for any plugin updates for ${manifest['name']}.`}
          /* @ts-ignore */
          leading={<FormRow.Icon source={Icons.Copy} />}
          trailing={FormRow.Arrow}
          onPress={() => Updater.checkForUpdates()}
        />
        <FormDivider />
        <FormRow
          /* @ts-ignore */
          label="Source"
          subLabel={`View ${manifest['name']} source code`}
          /* @ts-ignore */
          leading={<FormRow.Icon source={Icons.Open} />}
          trailing={FormRow.Arrow}
          onPress={() => Router.openURL(manifest.links.source)}
        />
      </View>
    </SectionWrapper>
    <Text style={styles.subheaderText}>
      {`Version: (${manifest.version}) Build: (${manifest.plugin.hash})`}
    </Text>
  </ScrollView>
};
