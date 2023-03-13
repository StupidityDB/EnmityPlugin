// main imports of elements and dependencies
import { SettingsStore } from 'enmity/api/settings';
import { FormDivider, FormRow, FormSection, ScrollView, View } from 'enmity/components';
import { getByProps } from 'enmity/metro';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import Credits from '../Dependent/Credits';
import { Updater, Icons } from '../../common';

// main settingsStore and manifest interface
interface SettingsProps {
  settings: SettingsStore;
  manifest: object;
  children?: any;
}

// main declaration of modules being altered by the plugin
const Router = getByProps("openURL", "transitionToGuild")

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
    <FormSection title="Source">
      <View style={styles.formrowContainer}>
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
          onPress={() => {
            Router.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${manifest['name']}`)
          }}
        />
      </View>
    </FormSection>
    {/* @ts-ignore */}
    <FormRow style={styles.bottom_padding} label={
      `Version: ${manifest['version']}
Build: ${(manifest['build']).split('-')[1]}`
    } />
  </ScrollView>
};
