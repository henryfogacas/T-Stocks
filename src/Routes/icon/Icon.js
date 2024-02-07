import React from "react";
import { StyleSheet, Image } from "react-native";

const Icon = ({ focused, image }) => {
    const iconStyle = focused ? styles.iconFocused : styles.icon;
    return <Image style={iconStyle} source={image} />;
};

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
        opacity: 0.5,
    },
    iconFocused: {
        width: 30,
        height: 30,
        opacity: 1,
    }
})

export default Icon;