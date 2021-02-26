import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as COLOR from "../../assets/color/ColorTemp";
import { useNavigation } from '@react-navigation/native';
import ProfileUser from '../../views/containers/Profile/profileUser/ProfileUser'
import ProfileEdit from "../../views/containers/Profile/editProfile/ProfileEdit";
import ProfileChangePassword from "../../views/containers/Profile/editProfile/ProfileChangePassword";
import { forFade } from "../../views/components/movePageStyle";
import Login from '../../views/containers/LoginRegister/Login';

const Stack = createStackNavigator()

function ProfileScreen(props) {
    const navigation = useNavigation();

    return (
        <ProfileUser
            style={{ backgroundColor: 'white' }}
            {...props}
            navigation={navigation} />
    )
}

function EditProfileScreen(props) {
    const navigation = useNavigation();
    const { route } = props

    return (
        <ProfileEdit 
        {...props} 
        navigation={navigation} 
        data_member={route.params} />
    )
}
function ChangePasswordProfileScreen(props) {
    const navigation = useNavigation();
    const { route } = props

    return (
        <ProfileChangePassword
        {...props} 
        navigation={navigation} 
        data_member={route.params} />
    )
}

export default function Profile() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile | Last Hour Food Sale"
                component={ProfileScreen}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerStyleInterpolator: forFade
                }}
            />
            <Stack.Screen
                name="Change Password"
                component={ChangePasswordProfileScreen}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    );
}