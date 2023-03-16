import { Text, View } from "enmity/components";
import { React } from "enmity/metro/common";
import styles from '../../common/StyleSheet';
import { SectionWrapperProps } from "../../def";

export default ({ label, children, style }: SectionWrapperProps) => {
    return <View style={[style, {marginTop: 10}]}>
        <Text style={styles.sectionWrapperText}>
            {label.toUpperCase()}
        </Text>
        {children}
    </View>
}
