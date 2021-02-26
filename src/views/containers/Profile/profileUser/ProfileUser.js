import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from "react-redux"

import Picture from "../../../../assets/logo/akun.png";
import * as COLOR from "../../../../assets/color/ColorTemp";
import { logout } from '../../../../actions/menu';

function ProfilePicture() {
    const member = useSelector(state => state.member.data)

    const { email, nama, password } = member[0]


    return (
        <>
            <View style={style.Card_Image}>
                <Image
                    style={style.Image}
                    source={Picture}>
                </Image>
            </View>
            <View style={style.Card_Name_User}>
                <View>
                    <Text style={style.Text_Username}>{nama}</Text>
                </View>
                <Text style={style.Text_Footer_Menu}>{email}</Text>
            </View>
        </>
    )
}

export default function ProfileUser(props) {
    const { navigation } = props;
    const dispatch = useDispatch()
    const member = useSelector(state => state.member.data)

    const { email, nama, password,token } = member[0]

    const handleLogout = () => {
        dispatch(logout(navigation,token)
        ),[dispatch,token,navigation]
    }
    return (
        <>
            <ScrollView style={{ flexDirection: 'column', backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <ProfilePicture />
                </View>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('EditProfile', { nama, email, password })}
                >
                    <View style={style.Card_Menu}>
                        <View>

                            <Text style={style.Text_Edit_Profile}>
                                Edit Profile
                            </Text>
                            <Text style={style.Text_Footer_Menu}>
                                Terakhir Update 12 Menit yang Lalu
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('EditProfile')}
                >
                    <View style={style.Card_Menu}>
                        <View>
                            <Text style={style.Text_Edit_Profile}>
                                Beri Kami Rating
                            </Text>
                            <Text style={style.Text_Footer_Menu}>
                                Pada Google PlayStore
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('EditProfile')}
                >
                    <View style={style.Card_Menu}>
                        <View>
                            <Text style={style.Text_Edit_Profile}>
                                Tentang Kami
                            </Text>
                            <Text style={style.Text_Footer_Menu}>
                                Cari tahu tentang kami
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                // onPress={() => navigation.navigate('EditProfile')}
                >
                    <View style={style.Card_Menu}>
                        <View>
                            <Text style={style.Text_Edit_Profile}>
                                Bergabung Dengan Kami
                            </Text>
                            <Text style={style.Text_Footer_Menu}>
                                Menjadi merchant di app kami
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => handleLogout()}
                >
                    <View style={style.Card_Menu}>
                        <View>
                            <Text style={style.Text_Edit_Profile}>
                                Keluar
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    Card_Image: {
        width: 100,
        height: 100,
        backgroundColor: COLOR.GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'white'

    },
    Image: {
        borderRadius: 50,
        width: "100%",
        height: "100%"
    },
    Card_Name_User: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text_Edit_Profile: {
        color: COLOR.BLACK,
        fontSize: 16
    },
    Text_Username: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Card_Menu: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 0.4,
        borderBottomColor: COLOR.GREY
    },
    Text_Footer_Menu: {
        fontSize: 10,
        color: 'grey'
    }
})