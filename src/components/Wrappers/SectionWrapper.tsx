import { View, Text } from "enmity/components"
import { Constants, React, StyleSheet } from "enmity/metro/common"

const styles = StyleSheet.createThemedStyleSheet({
    text: {
        color: Constants.ThemeColorMap.HEADER_SECONDARY,
        paddingLeft: "5.5%",
        paddingRight: 10,
        marginBottom: 10,
        letterSpacing: 0.25,
        fontFamily: Constants.Fonts.PRIMARY_BOLD,
        fontSize: 12
    },
});

interface SectionWrapperProps {
    label: string, 
    children?: any, 
    style?: { [key: string]: any }
}

export default ({ label, children, style }: SectionWrapperProps) => {
    return <View style={[style, {marginTop: 10}]}>
        <Text style={[styles.text, styles.optionText]}>
            {label.toUpperCase()}
        </Text>
        {children}
    </View>
}
