// main imports of elements and dependencies
import { FormDivider, FormRow, ScrollView, View, Text, FormInput } from 'enmity/components';
import { getByProps } from 'enmity/metro';
import { React } from 'enmity/metro/common';
import Credits from '../Dependent/Credits';
import { Updater, Icons } from '../../common';
import SectionWrapper from '../Wrappers/SectionWrapper';
import styles from '../../common/StyleSheet';
import { SettingsProps } from '../../common/types';
import { showOAuth2Modal } from '../../common/RDBAPI';
import { get, set } from 'enmity/api/settings';
import { version } from 'enmity/api/native';

const Router = getByProps("openURL", "transitionToGuild");
const optionalMargin = parseInt(version?.split(".")[0]) > 163 ? 15 : 0;

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
          trailing={<FormRow.Arrow style={{ marginLeft: -optionalMargin }}/>}
          // @ts-ignore
          leading={<FormRow.Icon source={Icons.Self} />}
          onPress={() => showOAuth2Modal()}
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
    <SectionWrapper label="Source">
      <View style={styles.formrowContainer}>
        <FormRow
          /* @ts-ignore */
          label="Check for Updates"
          subLabel={`Check for any plugin updates for ${manifest['name']}.`}
          /* @ts-ignore */
          leading={<FormRow.Icon source={Icons.Copy} />}
          trailing={FormRow.Arrow}
          onPress={() => {
            Updater.checkForUpdates()
          }}
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
