import { getIDByName } from 'enmity/api/assets';
import { FormRow, Text, TouchableOpacity, View } from "enmity/components";
import { Constants, React } from "enmity/metro/common";
import styles from "../../common/StyleSheet";
import { ButtonProps } from '../../def';
import { getByProps } from 'enmity/metro';

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const { ProfileGradientCard } = getByProps("ProfileGradientCard");

export default function Button({ text, image = "ic_new_group", dangerous, onPress, style }: ButtonProps) {
  const themeContext = useThemeContext();

  const contextStyles = {
    container: {
      width: "98%",
      padding: 1,
      borderRadius: 9
    },
    safeText: {
      color: resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.TEXT_NORMAL)
    },
    dangerousText: {
      color: resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.TEXT_MUTED)
    },
    safeIcon: {
      tintColor: resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.INTERACTIVE_NORMAL)
    },
    dangerousIcon: {
      tintColor: resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.TEXT_MUTED)
    }
  }

  return <ProfileGradientCard style={[contextStyles.container, style]} fallbackBackground={styles.fallback.color}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress ?? console.log("No press function provided.")}
    >
      {/* @ts-ignore ~ cannot assign actual props to intrinsic attributes, i can confirm this works */}
      <FormRow.Icon source={getIDByName(image)} style={[
        styles.icon,
        dangerous
          ? contextStyles.dangerousIcon
          : contextStyles.safeIcon
      ]} />
      <Text style={[
        styles.text,
        dangerous
          ? contextStyles.dangerousText
          : contextStyles.safeText,
        styles.buttonText
      ]}>{text}</Text>
    </TouchableOpacity>
  </ProfileGradientCard>
};
