import { View, Text } from "enmity/components"
import { Constants, React, StyleSheet } from "enmity/metro/common"
import { ReactElement } from "react";

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
    children?: Partial<ReactElement>, 
    style?: { [key: string]: any }
}

/**
 * Wrapper for any components which displays them in a section with a label
 * @param {string} label: The label for the wrapper, which will be displayed above the content inside of the component.
 * @param {TSX Fragment} component: The component to render inside of the @arg View.
 */
export default ({ label, children, style }: SectionWrapperProps) => {
    return <View style={[style, {marginTop: 10}]}>
        <Text style={[styles.text, styles.optionText]}>
            {label.toUpperCase()}
        </Text>
        {children}
    </View>
}
