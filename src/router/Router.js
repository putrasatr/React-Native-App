import * as React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as COLOR from "../assets/color/ColorTemp";

import HomePage from './routes/HomePage'
import SearchPage from "./routes/SearchPage";
import ProfilePage from "./routes/ProfilePage"
import FavoritePage from './routes/FavoritePage'
import OrderPage from './routes/OrderPage'

const Tab = createMaterialBottomTabNavigator();

export default function Router() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={COLOR.MAIN_COLOR}
            inactiveColor={COLOR.GRAY}
            barStyle=
            {
                {
                    backgroundColor: "white",
                    padding: 5
                }
            }
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="silverware"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderPage}
                options={{
                    tabBarLabel: 'Order',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="subtitles"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchPage}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="magnify"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoritePage}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-circle"
                            color={color}
                            size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


