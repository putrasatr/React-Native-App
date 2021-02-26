import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native"
import { Card } from 'react-native-paper';
import ContentLoader from 'react-native-masked-loader';

import { loadOrder, loadMenu } from "../../../actions/menu";
import { getLoading } from "../../components/loading";
import * as COLOR from "../../../assets/color/ColorTemp";
import numToRupiah from "../../components/numTorupiah/NumToRupiah"

function OrderInvoice(props) {
    const [colorBtn, setColorBtn] = React.useState(COLOR.MAIN_COLOR)
    const [loading, setLoading] = React.useState(true)
    const navigation = useNavigation();
    const { nama_makanan, nama_merchant, alamat_merchant, jlh_item, harga_diskon } = props.route.params.data
    const id_member = useSelector(state => state.member.data[0].id)
    const { id_invoice, count, order } = props.route.params.dataInvoices
    const dispatch = useDispatch()
    const MaskedElement = getLoading();

    const handleOK = () => {
        dispatch(loadOrder(id_member))
        dispatch(loadMenu(11))
        navigation.navigate('Home | Last Hour Food Sale')
    }
    const style = StyleSheet.create({
        Card_Content: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            elevation: 5,
            display: 'flex'
        },
        Card_Body: {
            width: '100%',
            height: '10%',
            borderBottomWidth: 1,
            borderBottomColor: COLOR.GREY,
            flexDirection: 'row'
        },
        Card_Body_Text: {
            width: "50%",
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Body_Text_Footer: {
            width: "50%",
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'

        },
        Card_Body_Two: {
            width: '100%',
            height: '25%',
            backgroundColor: 'white',
            flexDirection: 'column',
            borderBottomWidth: 1,
            borderBottomColor: COLOR.GREY
        },
        Card_Body_Two_Text: {
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            // backgroundColor: 'white',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Body_Three: {
            width: '100%',
            height: '15%',
            backgroundColor: 'white',
            flexDirection: 'row'
        },
        Card_Body_Three_Text: {
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Body_Three_Text_Text: {
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Footer: {
            width: '100%',
            height: '50%',
            flexDirection: 'column',
            marginTop: 'auto',
        },
        Card_Footer_Text: {
            width: '100%',
            height: '85%'
        },
        Card_Footer_Text_Button: {
            width: '100%',
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorBtn,
            borderRadius: 15
        }

    })
    setTimeout(() => { setLoading(false) }, 1500);

    // function tick() {
    //     return (
    //         <View>
    //             <Text>Hello, world!</Text>
    //             <Text>It is {new Date().toLocaleTimeString()}.</Text>
    //         </View>
    //     );

    // }

    // setTimeout(() => tick, 1000);

    if (loading && order) {
        return (
            <Card.Content
                style=
                {{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: 10
                }}
            >
                <ContentLoader MaskedElement={MaskedElement} />

            </Card.Content>
        )
    } else {
        return (
            <Card.Content style={style.Card_Content}>

                <View style={style.Card_Body}>
                    <View style={style.Card_Body_Text}>
                        <Text
                            style=
                            {{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: COLOR.BLACK
                            }}>
                            Total Pembayaran</Text>
                    </View>
                    <View style={style.Card_Body_Text_Footer}>
                        <Text
                            style=
                            {{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: COLOR.MAIN_COLOR
                            }}>
                            Rp.{order ? numToRupiah(harga_diskon * count) : numToRupiah(harga_diskon * jlh_item)}</Text>
                    </View>
                </View>

                <View style={style.Card_Body_Two}>
                    <View style={style.Card_Body_Two_Text}>
                        <Text style={{ fontSize: 17 }}>ID PESANAN</Text>
                        <Text
                            style=
                            {{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLOR.MAIN_COLOR
                            }}>
                            {id_invoice}</Text>
                    </View>
                </View>

                <View style={style.Card_Body_Three}>
                    <View style={style.Card_Body_Three_Text}>
                        <Text>Pembayaran Dalam</Text>
                    </View>
                    <View style={style.Card_Body_Three_Text_Text}>

                    </View>
                </View>

                <View style={style.Card_Footer}>
                    <View style={style.Card_Footer_Text}>
                        <Text
                            style=
                            {{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color:
                                    COLOR.BLACK
                            }}>
                            Petunjuk Pembayaran</Text>
                        <Text
                            style=
                            {{
                                fontSize: 13,
                                color: COLOR.GRAY
                            }}>
                            1. Setelah Anda melakukan pemesanan, Anda akan melihat waktu pengambilan pesanan Anda.</Text>
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
                            }}>
                            3. Setelah Anda mengumpulkan makanan, harap tunjukkan hal ini di aplikasi dengan menggesek ke kanan pada bilah biru untuk menunjukkan bahwa Anda telah mengambil pesanan Anda.</Text>
                    </View>
                    {
                        order ?
                            <TouchableWithoutFeedback
                                onPress={() => handleOK()}
                                onPressIn={() => setColorBtn(COLOR.MAIN_COLOR)}
                                onPressOut={() => setColorBtn(COLOR.MAIN_COLOR)}>
                                <View style={style.Card_Footer_Text_Button}>
                                    <Text
                                        style=
                                        {{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            color: COLOR.WHITE
                                        }}>
                                        OK</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            :
                            <View></View>
                    }

                </View>

            </Card.Content>
        )
    }
}


export default OrderInvoice