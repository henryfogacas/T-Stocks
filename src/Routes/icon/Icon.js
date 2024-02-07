import React from "react";
import { Feather } from 'react-native-vector-icons'

export default function Icon({ focused, iconName }) {
    const opacity = focused ? 1 : 0.5;
    const size = focused ? 30 : 25;
    return <Feather name={iconName} opacity={opacity} size={size} />;
};