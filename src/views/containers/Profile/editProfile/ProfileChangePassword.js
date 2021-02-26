import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, KeyboardAvoidingView, Image, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Picture from "../../../../assets/logo/dakon.png";
import * as COLOR from "../../../../assets/color/ColorTemp";

export default function ProfileChangePassword(props) {
    const { navigation, data_member } = props

    const [password, onChangePas] = React.useState(data_member.password || '');
    const [newPassword, onChangeNew] = React.useState('');
    const [newRePassword, onChangeNewRe] = React.useState('');
    const [enableShift, SetEnableShift] = React.useState(false)

    const handleCancel = () => {
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
                            color={COLOR.MAIN_COLOR} />
                    </View>
                </View>
                <View style={style.Card_Text}>
                    <TextInput
                        style={{ height: 40, borderBottomColor: 'black', marginLeft: 10, width: 'auto' }}
                        onChangeText={text => onChangePas(text)}
                        value={password}
                        placeholder='Password'
                        underlineColor={'black'}
                        selectionColor={'black'}
                        keyboardType={'twitter'}
                        onFocus={() => SetEnableShift(true)}
                        backgroundColor={'white'}
                        label='Password'
                        secureTextEntry
                    ></TextInput>
                </View>
                <View style={style.Card_Text}>
                    <TextInput
                        style={{ height: 40, borderBottomColor: 'black', marginLeft: 10, width: 'auto' }}
                        onChangeText={text => onChangeNew(text)}
                        value={newPassword}
                        placeholder='Password Baru'
                        underlineColor={'black'}
                        selectionColor={'black'}
                        keyboardType={'twitter'}
                        backgroundColor={'white'}
                        secureTextEntry
                        onFocus={() => SetEnableShift(true)}>
                    </TextInput>
                </View>

                <View style={style.Card_Text}>
                    <TextInput
                        style={{ height: 40, borderBottomColor: 'black', marginLeft: 10, width: 'auto' }}
                        onChangeText={text => onChangeNewRe(text)}
                        value={newRePassword}
                        placeholder='Konfirmasi Password Baru'
                        underlineColor={'black'}
                        selectionColor={'black'}
                        keyboardType={'twitter'}
                        backgroundColor={'white'}
                        secureTextEntry
                        onFocus={() => SetEnableShift(true)}>
                    </TextInput>
                </View>
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
        height: '40%',
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
        height: '50%',
        width: '100%',
        flexDirection: 'column',

    },
    Card_Text: {
        width: '100%',
        height: '10%',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GRAY,
        justifyContent: 'center'
    }
})