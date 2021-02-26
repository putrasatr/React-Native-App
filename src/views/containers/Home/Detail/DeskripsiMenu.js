import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as COLOR from "../../../../assets/color/ColorTemp";
import defaultImg from "../../../../assets/logo/default.png";
import {API_URL} from "../../../../config/constant"

const DeskripsiMenu = (props) => {
    const navigation = useNavigation()

    const { nama_merchant, deskripsi, logo, alamat, id_merchant } = props.data

    const getImage = logo ? { uri: `${API_URL}images/uploads/` + logo } : defaultImg
    
    return (
        <View style={style.Card}>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Merchant', id_merchant)}>
                <View style={style.Card_Info_Merchant}>
                    <View style={style.Card_Image_Merchant}>
                        <Image source={getImage} style={style.Image_Merchant}></Image>
                    </View>
                    <View style={style.Card_Location_Merchant}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>{nama_merchant}</Text>
                        <Text>{alamat}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <View style={style.Card_Text_Desc}>
                <Text style={{ fontSize: 20 }}>
                    {deskripsi}
                </Text>
            </View>
        </View>
    )
}

export default DeskripsiMenu

const BORDER_RAD = 50

const style = StyleSheet.create({
    Card: {
        flexDirection: 'column',
    },
    Card_Info_Merchant: {
        flexDirection: 'row',
        width: '100%',
        height: '45%',
        backgroundColor: COLOR.WHITE,
        zIndex: 1

    },
    Card_Image_Merchant: {
        width: 100,
        height: 100,
        backgroundColor: COLOR.WHITE,
        borderRadius: BORDER_RAD,
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,

    },
    Image_Merchant: {
        width: '100%',
        height: '100%',
        borderRadius: BORDER_RAD
    },
    Card_Location_Merchant: {
        height: '100%',
        width: '60%',
        borderLeftWidth: 4,
        borderColor: COLOR.MAIN_COLOR,
        padding: 10,
        marginLeft: 10
    },
    Card_Text_Desc: {
        width: '100%',
        height: '60%',
        backgroundColor: COLOR.WHITE,
        padding: 10
    },

})