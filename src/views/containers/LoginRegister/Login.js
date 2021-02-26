import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ActivityIndicator } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import background from "../../../assets/logo/default.png";
import * as COLOR from "../../../assets/color/ColorTemp";
import emailValidator from '../../components/email/EmailValidator'
import { login } from '../../../actions/menu'

const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = React.useState({ value: '', error: '' })
    const [password, setPassword] = React.useState({ value: '', error: '' })
    const [loading, setLoading] = React.useState(false)
    const [isFill, setIsFill] = React.useState(false)

    const data = useSelector(state => state.member);

    const onLogin = () => {
        if (email.value && password.value) {
            setLoading(true)
            dispatch(login(email.value, password.value, navigation))
        } else {
            setIsFill(true)
        }
        setTimeout(() => { setLoading(false) }, 1200);
    }

    const navigation = useNavigation()
    const style = StyleSheet.create({
        Card: {
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexDirection: 'column',
        },
        Card_Top: {
            width: '100%',
            height: "45%",
            backgroundColor: 'white',
            flexDirection: 'column',
            position: 'relative'
        },
        Card_Top_Image_Box: {
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            borderBottomLeftRadius: 90,

        },
        Image_Top: {
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 90
        },
        Card_Top_Below_Image_Box: {
            width: '100%',
            height: '50%',
            backgroundColor: 'white'
        },
        Box_Absolute: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderTopRightRadius: 90,
            justifyContent: 'center',
            alignItems: 'center',
        },
        Text_Welcome: {
            fontWeight: 'bold',
            fontSize: 26,

        },
        Card_Bottom: {
            flexDirection: 'column',
            width: '100%',
            height: '55%',
            backgroundColor: 'white',
            alignItems: 'center'
        },
        Card_TextInput: {
            width: '85%',
            height: '20%',
            backgroundColor: 'white',
            flexDirection: 'row',
            borderWidth: isFill ? 2 : 1,
            borderColor: isFill ? 'red' : 'grey'
        },
        Logo: {
            width: '20%',
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Input: {
            width: '80%',
            height: '100%',
            backgroundColor: 'white',
        },
        Card_Text: {
            width: '100%',
            height: '10%',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop:15
        },
        Card_Text_Ask: {
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: 5,
            alignItems: 'flex-end'
        },
        Card_Text_Regis: {
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            padding: 5,
            paddingLeft: 5
        }
    })
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={style.Card}>
                <View style={style.Card_Top}>
                    <View style={style.Card_Top_Image_Box}>
                        <Image source={background} style={style.Image_Top} />
                    </View>
                    <View style={style.Card_Top_Below_Image_Box}>
                        <Image source={background} style={style.Image_Top} />
                        <View style={style.Box_Absolute}>
                            <Text style={style.Text_Welcome}>Selamat Datang !</Text>
                        </View>
                    </View>

                </View>


                <View style={style.Card_Bottom}>
                    {loading ? <ActivityIndicator size={'small'} color={COLOR.MAIN_COLOR}></ActivityIndicator> : <Text style={{ color: COLOR.RED }}>{data.msg ? 'Email dan/atau Password Salah.' : ''}</Text>}
                    <View style={style.Card_TextInput}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons
                                name={'email'}
                                size={30}
                                color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Masukan Email'
                                validator={emailValidator}
                                returnKeyType="next"
                                label='Email'
                                onChangeText={(text) => setEmail({ value: text, error: '' })}
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                error={!!email.error}
                                errorText={email.error}
                                autoCapitalize="none"
                                autoCompleteType="email"
                                textContentType="emailAddress"
                                keyboardType="email-address"
                            >

                            </TextInput>
                        </View>
                    </View>
                    <View
                        style=
                        {{
                            backgroundColor: 'white',
                            height: '2%',
                            width: '100%'
                        }} />
                    <View style={style.Card_TextInput}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons name={'lock'} size={30} color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Masukan Password'
                                validator={emailValidator}
                                label='Password'
                                onChangeText={(text) => setPassword({ value: text, error: '' })}
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                error={!!password.error}
                                errorText={password.error}
                                secureTextEntry
                            // onFocus={true}
                            >

                            </TextInput>
                        </View>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={() => onLogin()}>
                        <View
                            style=
                            {{
                                backgroundColor: COLOR.MAIN_COLOR,
                                marginTop: 10, width: '70%',
                                height: '10%',
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text
                                style=
                                {{
                                    color: COLOR.WHITE,
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>Masuk</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={style.Card_Text}>
                        <View style={style.Card_Text_Ask}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tidak Punya Akun ?</Text>
                        </View>

                        <View style={style.Card_Text_Regis}>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('Register Screen')}>
                                <Text style={{ color: COLOR.MAIN_COLOR, fontSize: 16 }}>Daftar</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Login

