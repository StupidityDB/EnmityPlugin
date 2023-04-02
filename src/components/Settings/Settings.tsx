import { version } from 'enmity/api/native';
import { get, set } from 'enmity/api/settings';
import { FormDivider, FormInput, FormRow, ScrollView, Text, View } from 'enmity/components';
import { getByName, getByProps } from 'enmity/metro';
import { Navigation, React } from 'enmity/metro/common';
import { Icons, Updater } from '../../common';
import styles from '../../common/StyleSheet';
import { SettingsProps } from '../../def';
import Credits from '../Dependent/Credits';
import SectionWrapper from '../Wrappers/SectionWrapper';
import { OAuth2Modal } from '../../common/RDBAPI';

const Router = getByProps("openURL", "transitionToGuild");
const optionalMargin = parseInt(version.split(".")[0]) > 163 ? 15 : 0;

export default ({ manifest, renderPage }: SettingsProps) => {
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
          onPress={() => renderPage(null, {
            pageName: "",
            pagePanel: OAuth2Modal
          })}
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
