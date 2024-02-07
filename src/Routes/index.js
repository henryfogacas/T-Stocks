import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/Home";
import Stocks from "../screens/Stocks";
import Wallet from "../screens/Wallet";
import Settings from "../screens/Settings";
import Icon from "./icon/Icon"
import { colors } from "../GlobalStyles";

const Tab = createBottomTabNavigator()

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.white,
                tabBarLabelStyle: { 
                    fontSize: 16,
                  },
                tabBarStyle: {
                    backgroundColor: colors.black,
                    height: 70,
                },
                tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon focused={focused} iconName="home" />
                    ),
                }}
            />
            <Tab.Screen
                name="Stocks"
                component={Stocks}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon focused={focused} iconName="trending-up" />
                    ),
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon focused={focused} iconName="dollar-sign" />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon focused={focused} iconName="settings" />
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
}