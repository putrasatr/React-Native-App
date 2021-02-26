import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native"
import { Card } from 'react-native-paper';

import { addOrder, addFirebase } from "../../../../actions/menu";
import * as COLOR from "../../../../assets/color/ColorTemp";
import numToRupiah from "../../../components/numTorupiah/NumToRupiah"

function MenuConfirm(props) {
    const [count, onClick] = React.useState(1);
    const [colorBtn, setColorBtn] = React.useState(COLOR.MAIN_COLOR)
    const [colorBtnCountMint, setColorBtnCountMint] = React.useState(COLOR.WHITE)
    const [colorBtnCountPlus, setColorBtnCountPlus] = React.useState(COLOR.WHITE)
    const [isMax, setMax] = React.useState(false)

    const { harga_diskon, nama_makanan, id_makanan, jlhItem, id_iklan, id_merchant, token } = props.data
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const id_invoice = 'LH' + Date.now()
    const id_member = useSelector(state => state.member.data[0].id)

    const handleConfirm = () => {
        dispatch(addOrder(id_invoice, id_iklan, id_member, id_merchant, count, false, token))
        navigation.navigate('Order Invoice', {
            data: props.data,
            dataInvoices: {
                id_invoice,
                count,
                order: true
            }
        })
    }

    const style = StyleSheet.create({
        Card_Content: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            elevation: 5
        },
        Card_Body: {
            width: '100%',
            height: '20%',
            borderBottomWidth: 1,
            borderBottomColor: COLOR.GREY
        },
        Card_Body_Text: {
            width: "100%",
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "column"
        },
        Card_Body_Text_Footer: {
            width: "100%",
            height: '10%',
            marginTop: 'auto',
            paddingBottom: 30,
            paddingLeft: 10

        },
        Card_Body_Two: {
            width: '100%',
            height: '25%',
            backgroundColor: COLOR.MAIN_COLOR,
            flexDirection: 'column'
        },
        Card_Body_Two_Text: {
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        },
        Card_Footer: {
            width: '100%',
            height: '70%',
            flexDirection: 'column'
        },
        Card_Footer_Text: {
            width: '100%',
            height: '50%',
        },
        Card_Footer_Text_Text: {
            width: '100%',
            height: '10%',
            flexDirection: 'row',
        },
        Card_Footer_Text_Text_One: {
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Footer_Text_Text_Two: {
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 6
        },
        Card_Footer_Text_Button: {
            width: '100%',
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorBtn,
            borderRadius: 15,
            marginTop: 10
        }

    })


    return (
        <Card.Content style={style.Card_Content}>

            <View style={style.Card_Body}>
                <View style={style.Card_Body_Text}>
                    <Text
                        style=
                        {{
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>
                        Nama Merchant</Text>
                    <Text
                        style=
                        {{
                            fontSize: 15,
                            color: COLOR.GRAY,
                            fontWeight: 'bold'
                        }}>
                        Alamat Merchant</Text>

                </View>
                <View style={style.Card_Body_Text_Footer}>
                    <Text>Id Pesanan</Text>
                </View>
            </View>

            <View style={style.Card_Body_Two}>
                <View style={style.Card_Body_Two_Text}>
                    <View style={style.Card_Body_Two_Text_Text}>
                        <Text
                            style=
                            {{
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>
                            {nama_makanan}</Text>
                        <Text
                            style=
                            {{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: COLOR.GRAY
                            }}>
                            Rp {numToRupiah(harga_diskon)}</Text>
                    </View>
                </View>
            </View>
            <View style={style.Card_Footer}>
                <View style={style.Card_Footer_Text}>
                    <Text
                        style=
                        {{
                            fontSize: 13,
                            color: COLOR.GRAY
                        }}
                    >1. Setelah Anda melakukan pemesanan, Anda akan melihat waktu pengambilan pesanan Anda.</Text>
                    <Text
                        style=
                        {{
                            fontSize: 13,
                            color: COLOR.GRAY
                        }}>
                        2. Di Merchant, lewati antrian dan pergilah ke konter dan berikan ID pesanan Anda yang ditampilkan di aplikasi ke kasir atau pelayan.</Text>
                    <Text
                        style=
                        {{
                            fontSize: 13,
                            color: COLOR.GRAY
                        }}
                    >3. Setelah Anda mengumpulkan makanan, harap tunjukkan hal ini di aplikasi dengan menggesek ke kanan pada bilah biru untuk menunjukkan bahwa Anda telah mengambil pesanan Anda.</Text></View>

                <View style={style.Card_Footer_Text_Text}>
                    <View style={style.Card_Footer_Text_Text_One}><Text>Pickup</Text></View>

                    <View style={style.Card_Footer_Text_Text_Two}>
                        <TouchableWithoutFeedback
                            onPress={() => count > 1 ? (onClick(count - 1),setMax(false)) : ''}
                            onPressIn={() => setColorBtnCountMint(COLOR.GREY)}
                            onPressOut={() => setColorBtnCountMint(COLOR.WHITE)}>
                            <View
                                style=
                                {{
                                    backgroundColor:
                                        colorBtnCountMint,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 4,
                                    width: '20%',
                                    height: '100%'
                                }}>
                                <MaterialCommunityIcons
                                    name={'minus'}
                                    size={25}
                                    color={COLOR.MAIN_COLOR}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <View
                            style=
                            {{
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '20%', height: '100%',
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                            <Text
                                style=
                                {{
                                    fontWeight: 'bold',
                                    color: COLOR.BLACK,
                                    fontSize: 24
                                }}
                            >{count}</Text>
                             <Text style={{position:'absolute',bottom:-14,color:COLOR.SECONDARY_COLOR}}>{isMax ? 'max' :''}</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => count < jlhItem ? onClick(count + 1) : setMax(true)}
                            onPressIn={() => setColorBtnCountPlus(COLOR.GREY)}
                            onPressOut={() => setColorBtnCountPlus(COLOR.WHITE)}>
                            <View
                                style=
                                {{
                                    backgroundColor: colorBtnCountPlus,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 4,
                                    width: '20%',
                                    height: '100%'
                                }}>
                                <MaterialCommunityIcons
                                    name={'plus'}
                                    size={25}
                                    color={COLOR.MAIN_COLOR}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>

                <TouchableWithoutFeedback
                    onPress={() => handleConfirm()}
                    onPressIn={() => setColorBtn(COLOR.MAIN_COLOR)}
                    onPressOut={() => setColorBtn(COLOR.MAIN_COLOR)}>
                    <View style={style.Card_Footer_Text_Button}>
                        <Text
                            style=
                            {{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLOR.WHITE
                            }} >
                            PESAN | total harga : Rp {numToRupiah(harga_diskon * count)}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Card.Content>
    )
}

export default MenuConfirm