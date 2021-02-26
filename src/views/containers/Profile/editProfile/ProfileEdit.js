import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Picture from "../../../../assets/logo/akun.png";
import * as COLOR from "../../../../assets/color/ColorTemp";

export default function EditProfile(props) {
    const { navigation, data_member } = props

    const [name, onChangeName] = React.useState(data_member.nama || name);
    const [email, onChangeEmail] = React.useState(data_member.email || email);
    const [enableShift, SetEnableShift] = React.useState(false)
    const [changeProfile, setChangeProfile] = React.useState(false)

    const handleChange = (text) => {
        if (data_member.nama == name) {
            setChangeProfile(false)
            onChangeName(text)
            return
        }
        onChangeName(text)
        setChangeProfile(true)
    }

    const handleCancel = () => {
        onChangeName(data_member.nama),
            onChangeEmail(data_member.email),
            navigation.goBack()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={enableShift}
            style={style.Card_Content}
        >
            <Card.Content style={style.Card_Content}>
                <View style={style.Card_Header}>
                    <View style={style.Card_Header_Btn_Cancel}>
                        <TouchableWithoutFeedback
                            onPress={() => handleCancel()}>
                            <MaterialCommunityIcons
                                name={'close'}
                                size={30}
                                color={COLOR.RED} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={style.Card_Header_Btn_Confirm}>
                        <MaterialCommunityIcons
                            name={'check'}
                            size={30}
                            color={!changeProfile && name == data_member.nama_member ? COLOR.MAIN_COLOR : COLOR.SECONDARY_COLOR} />
                    </View>
                </View>
                <View style={style.Card_Body}>
                    <View style={style.Card_Image}>
                        <Image
                            style={style.Image}
                            source={Picture}>
                        </Image>
                    </View>
                    <View>
                        <Text style={style.Card_Span}>Ganti Foto Profil</Text>
                    </View>
                </View>
                <View style={style.Card_Body_Two}>
                    <Text style={style.Card_Label}>Nama Pengguna</Text>
                    <View style={style.Card_Text}>
                        <TextInput
                            style={{ height: 40, borderBottomColor: 'black', marginLeft: 10, width: 'auto' }}
                            onChangeText={text => handleChange(text)}
                            value={name}
                            placeholder='Nama'
                            underlineColor={'black'}
                            selectionColor={'black'}
                            keyboardType={'twitter'}
                            backgroundColor={'white'}
                            onFocus={() => SetEnableShift(true)}
                        >
                        </TextInput>
                    </View>
                    <Text style={style.Card_Label}>Email</Text>
                    <View style={style.Card_Text}>
                        <TextInput
                            style={{ height: 40, borderBottomColor: 'black', marginLeft: 10, width: 'auto' }}
                            onChangeText={text => onChangeEmail(text)}
                            value={email}
                            placeholder='Email'
                            underlineColor={'black'}
                            selectionColor={'black'}
                            keyboardType={'twitter'}
                            backgroundColor={'white'}
                            onFocus={() => SetEnableShift(true)}
                        >
                        </TextInput>
                    </View>
                </View>
                <TouchableWithoutFeedback
                onPress={()=>navigation.navigate('Change Password',data_member)}>
                    <View style={style.Card_Footer}>
                        <Text style={style.Card_Footer_Text}>
                            Ubah Password
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </Card.Content >
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Card_Content: {
        backgroundColor: 'white',
        width: '100%',
        height: "100%",
        flex: 1,
        flexDirection: 'column',
    },
    Card_Header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row'
    },
    Card_Header_Btn_Cancel: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    Card_Header_Btn_Confirm: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    Card_Body: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Card_Image: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'grey'

    },
    Image: {
        borderRadius: 50,
        width: "100%",
        height: "100%"
    },
    Card_Span: {
        color: COLOR.BLUE
    },
    Card_Body_Two: {
        height: '30%',
        width: '100%',
        flexDirection: 'column'

    },
    Card_Label: {
        color: COLOR.GRAY,
        fontSize: 13
    },
    Card_Text: {
        width: '100%',
        height: '30%',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GRAY,
        justifyContent: 'center'
    },
    Card_Footer: {
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        justifyContent: 'center'
    },
    Card_Footer_Text: {
        color: COLOR.BLUE,
        fontSize: 18
    }
})