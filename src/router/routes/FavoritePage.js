import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import * as COLOR from "../../assets/color/ColorTemp";
import forFade from "../../views/components/movePageStyle";
import FavoriteList from "../../views/containers/Favorite/FavoriteList";
import DetailMenu from "../../views/containers/Home/Detail/DetailMenu"

function ListScreen(props) {
    const navigation = useNavigation();
    return (
        <FavoriteList style={{ backgroundColor: 'white' }} {...props} navigation={navigation} />
    )
}

const Stack = createStackNavigator();

export default function FavoritePage() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favoritku"
                component={ListScreen}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailMenu}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    );
}