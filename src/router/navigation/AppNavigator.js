import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../../views/containers/LoginRegister/Login';
import Register from '../../views/containers/LoginRegister/Register';
import Router from '../Router';

const Stack = createStackNavigator();

export default function AppNavigator() {
    const getAuth = () => {
        AsyncStorage.getItem('Auth', (err, result) => {
            return result
        })
    };

    if (getAuth() == 'undefined') {
        return <Router />
    } else {
        return (
            <Stack.Navigator
                initialRouteName='Login Screen'
                headerMode={'none'}>
                <Stack.Screen
                    name="Login Screen"
                    component={Login}
                    options={{
                        headerStyle: { backgroundColor: 'white' },
                    }}
                />
                <Stack.Screen
                    name="Register Screen"
                    component={Register}
                    options={{
                        headerStyle: { backgroundColor: 'white' },
                    }}
                />
                <Stack.Screen
                    name="Tab Navigator"
                    component={Router}
                    options={{
                        headerStyle: { backgroundColor: 'white' },
                        header: {
                            visible: false,
                        }
                    }}
                />
            </Stack.Navigator>

        )
    }
}
