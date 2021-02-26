import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, TextInput, TouchableOpacity, SafeAreaView, TouchableHighlight } from 'react-native';
import { ActivityIndicator } from 'react-native-paper'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

import background from "../../../assets/logo/login.png";
import * as COLOR from "../../../assets/color/ColorTemp";
import emailValidator from '../../components/email/EmailValidator'
import { register } from '../../../actions/menu'
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [email, setEmail] = React.useState({ value: '', error: '' })
    const [password, setPassword] = React.useState({ value: '', error: '' })
    const [repassword, setRePassword] = React.useState({ value: '', error: '' })
    const [username, setUsername] = React.useState({ value: '', error: '' })
    const [loading, setLoading] = React.useState(false)
    const [isFill, setIsFill] = React.useState(false)
    const data = useSelector(state => state.member);

    const emailExist = data.msg == 'Email already exists'
    const passwordDoesntMatch = data.msg == "Password not match"

    const onRegister = () => {
        if (email.value && password.value && username.value && repassword.value) {
            setLoading(true)
            dispatch(register(email.value, password.value, repassword.value, navigation, username.value))
        } else {
            setIsFill(true)
        }
        setTimeout(() => { setLoading(false) }, 1500);
    }
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
                            <Text style={style.Text_Welcome}>Buat Akun !</Text>
                        </View>
                    </View>

                </View>


                <View style={style.Card_Bottom}>
                    {loading ? <ActivityIndicator size={'small'} color={COLOR.MAIN_COLOR}></ActivityIndicator> : <Text style={{ color: COLOR.RED }}>{data.msg ? data.msg == email ? 'Server Error' : data.msg : ''}</Text>}
                    <View style=
                        {{
                            width: '85%',
                            height: '18%',
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            borderWidth:  isFill ? 2 : 1,
                            borderColor: isFill ? 'red' : 'grey'
                        }}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons name={'at'} size={30} color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Masukan Username'
                                // validator={emaiValidator}
                                label='Email'
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                onChangeText={(text) => setUsername({ value: text, error: '' })}
                            // onFocus={true}
                            >

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', height: '2%', width: '100%' }} />
                    <View style=
                        {{
                            width: '85%',
                            height: '18%',
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            borderWidth:  isFill ? 2 : 1,
                            borderColor: emailExist || isFill ? 'red' : 'grey'
                        }}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons name={'email'} size={30} color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Masukan Email'
                                // validator={emaiValidator}
                                label='Email'
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                // onFocus={true}
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
                    <View style={{ backgroundColor: 'white', height: '2%', width: '100%' }} />
                    <View style=
                        {{
                            width: '85%',
                            height: '18%',
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            borderWidth:  isFill ? 2 : 1,
                            borderColor: passwordDoesntMatch || isFill ? 'red' : 'grey'
                        }}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons name={'lock'} size={30} color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Masukan Password'
                                // validator={emaiValidator}
                                label='Password'
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                // onFocus={true}
                                onChangeText={(text) => setPassword({ value: text, error: '' })}
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                error={!!password.error}
                                errorText={password.error}
                                secureTextEntry
                            >

                            </TextInput>
                        </View>
                    </View><View style={{ backgroundColor: 'white', height: '2%', width: '100%' }} />

                    <View style=
                        {{
                            width: '85%',
                            height: '18%',
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            borderWidth: isFill ? 2 : 1,
                            borderColor: passwordDoesntMatch || isFill ? 'red' : 'grey'
                        }}>
                        <View style={style.Logo}>
                            <MaterialCommunityIcons name={'lock'} size={30} color={'black'} />
                        </View>
                        <View style={style.Input}>
                            <TextInput
                                placeholder='Konfirmasi Password'
                                // validator={emaiValidator}
                                label='Password'
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                onChangeText={(text) => setRePassword({ value: text, error: '' })}
                                // onFocus={true}
                                returnKeyType="done"
                                keyboardType="default"
                                autoCapitalize="sentences"
                                autoCorrect={true}
                                style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                                error={!!password.error}
                                errorText={password.error}
                                secureTextEntry
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={() => onRegister()}>
                        <View
                            style=
                            {{
                                backgroundColor: COLOR.MAIN_COLOR,
                                marginTop: 10, width: '70%',
                                height: '10%',
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 2
                            }}>
                            <Text
                                style=
                                {{
                                    color: COLOR.WHITE,
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>Buat</Text>
                        </View>
                    </TouchableWithoutFeedback>


                </View>

                <View style={style.Card_Text}>
                    <View style={style.Card_Text_Ask}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sudah Punya Akun ?</Text>
                    </View>
                    <View style={style.Card_Text_Regis}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login Screen')}>
                            <Text style={{ color: COLOR.MAIN_COLOR, fontSize: 16 }}>Masuk</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Register

const style = StyleSheet.create({
    Card: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    Card_Top: {
        width: '100%',
        height: "30%",
        backgroundColor: 'white',
        flexDirection: 'column',
        position: 'relative'
    },
    Card_Top_Image_Box: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white'
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
        alignItems: 'center'
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
        height: '18%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey'
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
        marginTop: 10
    },
    Card_Text_Ask: {
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'flex-end'
    },
    Card_Text_Regis: {
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        paddingLeft: 5
    }
})