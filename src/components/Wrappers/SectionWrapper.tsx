import { View, Text } from "enmity/components"
import { React } from "enmity/metro/common"
import { SectionWrapperProps } from "../../common/types";
import styles from '../../common/StyleSheet';

export default ({ label, children, style }: SectionWrapperProps) => {
    return <View style={[style, {marginTop: 10}]}>
        <Text style={styles.sectionWrapperText}>
            {label.toUpperCase()}
        </Text>
        {children}
    </View>
}
