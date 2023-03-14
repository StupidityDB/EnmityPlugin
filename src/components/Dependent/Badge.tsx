import { TouchableOpacity, View, Image } from "enmity/components";
import { Toasts } from "enmity/metro/common";
import React from "react";

export const Badge = ({ name, image }: { name: string, image: string }) => {
    const styles = {
        wrapper: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        image: {
            width: 24,
            height: 24,
            resizeMode: "contain",
            marginHorizontal: 2
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