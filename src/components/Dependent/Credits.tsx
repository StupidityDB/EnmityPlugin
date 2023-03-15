// main dependencies and components
import { Image, Text, TouchableOpacity, View } from 'enmity/components';
import { bulk, filters } from 'enmity/metro';
import { Constants, React } from 'enmity/metro/common';
import { Miscellaneous } from '../../common';
import styles from '../../common/StyleSheet';
import { CreditsProps } from '../../common/types';

// @ts-ignore
const Animated = window.enmity.modules.common.Components.General.Animated

const [
    Router,
    Clipboard,
] = bulk(
    filters.byProps('transitionToGuild', "openURL"),
    filters.byProps('setString'),
);

export default ({ manifest }: CreditsProps) => {
    const animatedButtonScale = React.useRef(new Animated.Value(1)).current

    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const onPress = () => Router.openURL(manifest.links.source);
    const animatedScaleStyle = { transform: [{ scale: animatedButtonScale }] }

    return <View style={styles.creditsContainer}>
        <TouchableOpacity
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <Animated.View style={[animatedScaleStyle]}>
                <Image
                    style={[styles.creditsImage]}
                    source={{ uri: 'https://cdn.spin.rip/r/l9uevwe4ia0.jpg' }}
                />
            </Animated.View>
        </TouchableOpacity>
        <View style={styles.creditsTextContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.creditsMainText, styles.creditsHeader]}>
                    {manifest.name}
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.creditsMainText, styles.creditsSubHeader]}>
                    A plugin by
                </Text>
                {manifest.authors.map((author, index: number, authorsArray: any[]) => {
                    return <TouchableOpacity onPress={(): void => Router.openURL(author.profile)}>
                        <Text
                            style={[styles.creditsMainText, styles.safeText, styles.creditsSubHeader, {
                                paddingLeft: 4,
                                fontFamily: Constants.Fonts.DISPLAY_BOLD,
                                flexDirection: 'row'
                            }]
                            }>
                            {author.name}{index < (authorsArray.length - 1) ? "," : null}
                        </Text>
                    </TouchableOpacity>
                })}
            </View>
            <View>
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        Clipboard.setString(`**${manifest.name}** v${manifest.version}`);
                        Miscellaneous.displayToast('plugin name and version', 'clipboard');
                    }}
                >
                    <Text style={[styles.creditsMainText, styles.creditsSubHeader]}>
                        Version:
                    </Text>
                    <Text
                        style={[styles.creditsMainText, styles.creditsSubHeader, {
                            paddingLeft: 4,
                            fontFamily: Constants.Fonts.DISPLAY_BOLD
                        }]} >
                        {manifest.version}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
};
