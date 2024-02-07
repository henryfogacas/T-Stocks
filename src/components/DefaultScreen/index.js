import React from "react";

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import GlobalStyles, { colors } from "../../GlobalStyles";
import Styles from "./styles";

export default function DefaultScreen({ children }) {
    return <>
        <SafeAreaView style={Styles.screenAdjust}>
            <StatusBar backgroundColor={colors.white} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={GlobalStyles.fill}>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView />
    </>
}