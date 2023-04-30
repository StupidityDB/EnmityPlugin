import { getIDByName } from 'enmity/api/assets';
import { FormRow, Text, TouchableOpacity } from "enmity/components";
import { Constants, React } from "enmity/metro/common";
import styles from "../../common/StyleSheet";
import { ButtonProps } from '../../def';
import { getByProps } from 'enmity/metro';

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const { ProfileGradientCard } = getByProps("ProfileGradientCard");
const { triggerHaptic } = getByProps("triggerHaptic");


const _Button = ({ onPress, innerStyle, textStyle, dangerous, contextStyles, text, image, disabled, useImage = true, useText = true, textDirection = "right" }: ButtonProps & { contextStyles: Record<string, any> }) => {
  const RenderableText = useText && text && typeof text === "string" 
    ? () => <Text style={[
      styles.text,
      dangerous
        ? contextStyles.dangerousText
        : contextStyles.safeText,
      textStyle
    ]}>{text}</Text>
    : text as React.FunctionComponent;

  return <TouchableOpacity
    style={[styles.button, innerStyle, disabled ? { opacity: 0.5 } : {}]}
    onPress={onPress ?? console.log("No press function provided.")}
    disabled={disabled}
  >
    {textDirection === "left" && <RenderableText />}
    {/* @ts-ignore ~ cannot assign actual props to intrinsic attributes, i can confirm this works */}
    {useImage && <FormRow.Icon source={getIDByName(image)} style={[
      styles.icon,
      dangerous
        ? contextStyles.dangerousIcon
        : contextStyles.safeIcon,
      textStyle?.fontSize ? {
        width: textStyle.fontSize + 4,
        height: textStyle.fontSize + 4
      } : {},
      textDirection === "right" 
        ? { marginRight: 4 }
        : { marginLeft: 4 }
    ]} />}
    {textDirection === "right" && <RenderableText />}
</TouchableOpacity>
}

export default function Button({ text, image = "ic_new_group", dangerous, onPress, style, innerStyle, textStyle, useGradient, useImage, useText, disabled, textDirection }: ButtonProps) {
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
    onPress={() => {
      onPress?.();
      triggerHaptic();
    }} 
    innerStyle={innerStyle}
    textStyle={textStyle}
    dangerous={dangerous} 
    contextStyles={contextStyles} 
    text={text} 
    image={image}
    disabled={disabled}
    useImage={useImage}
    useText={useText}
    textDirection={textDirection}
  />

  return useGradient 
      ? <ProfileGradientCard 
        style={[contextStyles.container, style]} 
        fallbackBackground={styles.fallback.color}>
        <RenderableButton />  
      </ProfileGradientCard> 
      :  <RenderableButton />  
};
