import { Image, TouchableOpacity, View } from "enmity/components";
import { React, Toasts } from "enmity/metro/common";

export const Badge = ({ name, image, size, margin }: { name: string, image: string, size: number, margin: number }) => {
    const styles = {
        wrapper: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        image: {
            width: size,
            height: size,
            resizeMode: "contain",
            marginHorizontal: margin
        }
    };

    return <View style={styles.wrapper}>
        <TouchableOpacity
            onPress={() => Toasts.open({
                content: name,
                source: { uri: image }
            })}
        >
            <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
    </View>;
};
