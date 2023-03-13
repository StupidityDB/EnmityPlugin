// main dependencies and components
import { Image, Text, TouchableOpacity, View } from 'enmity/components';
import { bulk, filters } from 'enmity/metro';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { Miscellaneous } from '../../common';
import stylesheetStyles from '../../common/StyleSheet';

// @ts-ignore
const Animated = window.enmity.modules.common.Components.General.Animated
// this is the main 'animated' component of react native, for some reason its not exported in enmity components 
// so i had to manually import it and make ts ignore it
import { CreditsProps } from '../../common/types';

// main declaration of modules being altered by the plugin
const [
    Router, // used to open a url externally
    Clipboard, // used to copy the dl link to keyboard
] = bulk(
    filters.byProps('transitionToGuild', "openURL"),
    filters.byProps('setString'),
);

const styles = StyleSheet.createThemedStyleSheet({
    // main container styles with everything inside
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        flexDirection: "row"
    },
    // styles for the container inside of the container, which has the main text elements
    textContainer: {
        paddingLeft: 15,
        paddingTop: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    // main image styling
    image: {
        width: 75,
        height: 75,
        borderRadius: 10
    },
    // global text styling, shared between both header and subheader
    mainText: {
        opacity: 0.975,
        letterSpacing: 0.25,
        fontFamily: Constants.Fonts.DISPLAY_NORMAL
    },
    // main header styling
    header: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY,
        fontFamily: Constants.Fonts.DISPLAY_BOLD,
        fontSize: 25,
        letterSpacing: 0.25
    },
    // main subheader styling
    subHeader: {
        color: Constants.ThemeColorMap.HEADER_SECONDARY,
        opacity: 0.975,
        fontSize: 12.75,
    }
}); // main stylesheet

export default ({ manifest }: CreditsProps) => {
    // uses React.useRef() to bind the value to the button
    const animatedButtonScale = React.useRef(new Animated.Value(1)).current // no scale initially

    const onPressIn = () => {
        // move @param animatedButtonScale to 1.1 in 250ms
        Animated.spring(animatedButtonScale, {
            toValue: 1.1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        // move @param animatedButtonScale to 1 in 250ms
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    // opens the repo of the plugin externally
    const onPress = () => { Router.openURL(manifest.links.source) };
    const animatedScaleStyle = { transform: [{ scale: animatedButtonScale }] } // main actual styling for the scale

    return <View style={styles.container}>
        <TouchableOpacity
            // used a TouchableOpacity to add opacity changes to the icon upon any press
            onPress={onPress} // opens spin's personal site
            onPressIn={onPressIn} // in animation
            onPressOut={onPressOut} // out animation
        >
            <Animated.View style={[animatedScaleStyle]} /* uses Animated.View to apply new animations to the image */>
                <Image
                    style={[styles.image]}
                    source={{
                        // image used for the icon, source takes either a require() or a uri
                        uri: 'https://cdn.spin.rip/r/l9uevwe4ia0.jpg',
                    }}
                />
            </Animated.View>
        </TouchableOpacity>
        <View style={styles.textContainer /* text only container */}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.mainText, styles.header]} /* main title text, in this case its "Dislate" */>
                    {manifest.name} {/* the plugin name in manifest.json */}
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' } /* makes the elements render inline */}>
                <Text style={[styles.mainText, styles.subHeader]}>
                    A plugin by
                </Text>
                {manifest.authors.map((author, index: number, authorsArray: any[]) => { 
                    return <TouchableOpacity onPress={(): void => Router.openURL(author.profile)}> 
                        <Text 
                            style={[styles.mainText, stylesheetStyles.safeText, styles.subHeader, {
                                paddingLeft: 4,
                                fontFamily: Constants.Fonts.DISPLAY_BOLD,
                                flexDirection: 'row'
                        }]}>
                                {author.name}{index < (authorsArray.length - 1) ? "," : null}
                        </Text>
                    </TouchableOpacity>
                })}
            </View>
            <View>
                <TouchableOpacity
                    style={{ flexDirection: 'row' } /* display text inline */}
                    onPress={() => {
                        Clipboard.setString(`**${manifest.name}** v${manifest.version}`);
                        Miscellaneous.displayToast('plugin name and version', "clipboard");
                    }} // copy the debug info from utility function to clipboard
                >
                    <Text style={[styles.mainText, styles.subHeader]}>
                        Version:
                    </Text>
                    <Text
                        style={[styles.mainText, styles.subHeader, {
                            paddingLeft: 4,
                            fontFamily: Constants.Fonts.DISPLAY_BOLD
                        }]} >
                        {manifest.version} {/* the version in manifest.json */}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}
