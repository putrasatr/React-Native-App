import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import * as COLOR from "../../../assets/color/ColorTemp";
import image from "../../../assets/logo/default.png"

export default function OrderItem(props) {
    const [size, onClick] = React.useState(
        {
            margin: '100%',
            font: 18,
            color: COLOR.SECONDARY_COLOR
        }
    );

    const { nama_makanan, id_invoice,status } = props.dataOrder
    const count = props.dataOrder.jumlah_pesanan
    const navigation = useNavigation();
    
    const BORDER_RAD_FAV = 8
    const style = StyleSheet.create({
        Card_OrderPage: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        Card_Item_Order: {
            width: '95%',
            height: 190,
            borderRadius: BORDER_RAD_FAV,
            // marginBottom:,
            marginTop: 10,
            elevation: 2
        }, Card: {
            flexDirection: "column",
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: BORDER_RAD_FAV,
        },
        Card_Title_Merchant: {
            width: '100%',
            height: '20%',
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 10,
            borderBottomWidth: 2,
            borderColor: COLOR.GREY,
            borderTopLeftRadius: BORDER_RAD_FAV,
            borderTopRightRadius: BORDER_RAD_FAV,
            alignItems: 'flex-end'
        },

        Card_Text: {
            flexDirection: 'column',
            width: "100%",
            height: "70%",
            padding: 10
        },
        Card_Text_Info: {
            flexDirection: 'row',
            width: '100%',
            height: '80%'
        },
        Card_Image_Food: {
            width: '30%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: 7
        },
        Image_Food: {
            width: '100%',
            height: '100%',
            borderRadius: 7
        },
        Card_Text_Deskripsi: {
            width: '70%',
            height: '100%',
            flexDirection: 'column'
        },
        Card_Text_Deskripsi_Name: {
            width: '100%',
            height: '70%',
            paddingLeft: 10
        },
        Card_Text_Deskripsi_Footer: {
            width: '100%',
            height: '30%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        Text_Merchant: {
            fontWeight: 'bold',
            color: COLOR.BLACK,
            fontSize: 16
        },
        Text_Merchant_Location: {
            fontWeight: 'bold',
            color: COLOR.GRAY,
            fontSize: 13
        },
        Card_Footer: {
            width: '100%',
            height: '30%',
            alignItems: 'center'
        },
        Card_Footer_Number: {
            textDecorationLine: 'line-through',
            paddingLeft: 10,
            fontSize: 13,
            color: "grey"

        },
        Card_Footer_Btn_Fav: {
            width: '50%',
            height: '100%',
            backgroundColor: 'white'
        },
        Card_Footer_Btn_Order: {
            backgroundColor: status ? COLOR.MAIN_COLOR : size.color,
            borderRadius: 10,
            width: size.margin,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10
        }
    })
    return (
        <View style={style.Card_OrderPage}>
            <View style={style.Card_Item_Order}>
                <View style={style.Card}>
                    <View style={style.Card_Title_Merchant}>
                        <TouchableWithoutFeedback
                            onPress={() => alert('Gak bisa dihapus')}>
                            <MaterialCommunityIcons
                                name={'close'}
                                size={27} />
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Order Invoice',
                            {
                                data: props.dataOrder,
                                dataInvoices:
                                {
                                    id_invoice,
                                    count,
                                    order: false
                                }
                            })
                        }>
                        <View style={style.Card_Text}>
                            <View style={style.Card_Text_Info}>
                                <View style={style.Card_Image_Food}>
                                    <Image
                                        source={image}
                                        style={style.Image_Food}>
                                    </Image>
                                </View>
                                <View style={style.Card_Text_Deskripsi}>
                                    <View style={style.Card_Text_Deskripsi_Name}>
                                        <Text style={style.Text_Merchant}>{nama_makanan}</Text>
                                        <Text>ID Pesanan</Text>
                                        <Text>{id_invoice}</Text>
                                    </View>
                                    {/* <View style={style.Card_Text_Deskripsi_Footer}>
                                   <View style={{ width: '30%', height: '60%', backgroundColor: COLOR.MAIN_COLOR, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 15 }}>Promo</Text>
                                    </View>
                                </View> */}
                                </View>
                            </View>

                            <View style={style.Card_Footer}>
                                    <View style={style.Card_Footer_Btn_Order}>
                                        <Text
                                            style=
                                            {{
                                                color: COLOR.WHITE,
                                                fontSize: size.font
                                            }}>
                                            {status ? 'Selesai' : 'Proses'}</Text>
                                    </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}


