import { getIDByName } from 'enmity/api/assets';
import { FormRow, Text, TouchableOpacity, View } from "enmity/components";
import { Constants, React } from "enmity/metro/common";
import styles from "../../common/StyleSheet";
import { ButtonProps } from '../../def';
import { getByProps } from 'enmity/metro';

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const { ProfileGradientCard } = getByProps("ProfileGradientCard");

const _Button = ({ onPress, innerStyle, textStyle, dangerous, contextStyles, text, image }: ButtonProps & { contextStyles: Record<string, any> }) => {
  return <TouchableOpacity
    style={[styles.button, innerStyle]}
    onPress={onPress ?? console.log("No press function provided.")}
  >
    {/* @ts-ignore ~ cannot assign actual props to intrinsic attributes, i can confirm this works */}
    <FormRow.Icon source={getIDByName(image)} style={[
      styles.icon,
      dangerous
        ? contextStyles.dangerousIcon
        : contextStyles.safeIcon,
      textStyle?.fontSize ? {
        width: textStyle.fontSize,
        height: textStyle.fontSize
      } : {}
    ]} />
    <Text style={[
      styles.text,
      dangerous
        ? contextStyles.dangerousText
        : contextStyles.safeText,
      textStyle
    ]}>{text}</Text>
</TouchableOpacity>
}

export default function Button({ text, image = "ic_new_group", dangerous, onPress, style, innerStyle, textStyle, useGradient }: ButtonProps) {
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

  const RenderableButton = () => <_Button 
    onPress={onPress} 
    innerStyle={innerStyle}
    textStyle={textStyle}
    dangerous={dangerous} 
    contextStyles={contextStyles} 
    text={text} 
    image={image}
  />

  return useGradient 
      ? <ProfileGradientCard style={[contextStyles.container, style]} fallbackBackground={styles.fallback.color}>
        <RenderableButton />  
      </ProfileGradientCard> 
      :  <RenderableButton />  
};
