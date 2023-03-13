// main imports of elements and dependencies
import { SettingsStore } from 'enmity/api/settings';
import { FormDivider, FormRow, ScrollView, View, Text } from 'enmity/components';
import { getByProps } from 'enmity/metro';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import Credits from '../Dependent/Credits';
import { Updater, Icons } from '../../common';
import SectionWrapper from '../Wrappers/SectionWrapper';
import stylesheetStyles from '../../common/StyleSheet';

// main settingsStore and manifest interface
interface SettingsProps {
  settings: SettingsStore;
  manifest: typeof import("../../../manifest.json");
  children?: any;
};

// main declaration of modules being altered by the plugin
const Router = getByProps("openURL", "transitionToGuild");

// icon and styles
const styles = StyleSheet.createThemedStyleSheet({
  icon: {
    color: Constants.ThemeColorMap.INTERACTIVE_NORMAL,
  },
  item: {
    color: Constants.ThemeColorMap.TEXT_MUTED
  },
  text_container: {
    display: 'flex',
    flexDirection: 'column'
  },
  subheaderText: {
    color: Constants.ThemeColorMap.HEADER_SECONDARY,
    textAlign: 'center',
    margin: 10,
    marginBottom: 50,
    letterSpacing: 0.25,
    fontFamily: Constants.Fonts.PRIMARY_BOLD,
    fontSize: 14
 },
}); // main stylesheet

export default ({ manifest, children }: SettingsProps) => {
  return <ScrollView>
    <Credits manifest={manifest} /* main credits gui, created from scratch exclusively for dislate */ />
    {children}
    <SectionWrapper label="Source">
      <View style={stylesheetStyles.formrowContainer}>
        <FormRow
          /* @ts-ignore */
          label="Check for Updates"
          subLabel={`Check for any plugin updates for ${manifest['name']}.`}
          /* @ts-ignore */
          leading={<FormRow.Icon style={styles.icon} source={Icons.Copy} />}
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
          leading={<FormRow.Icon style={styles.icon} source={Icons.Open} />}
          trailing={FormRow.Arrow}
          onPress={() => Router.openURL(manifest.links.source)}
        />
      </View>
    </SectionWrapper>
    <Text style={styles.subheaderText}>
      {`Version: (${manifest.version}) Build: (${manifest.hash})`}
    </Text>
  </ScrollView>
};
