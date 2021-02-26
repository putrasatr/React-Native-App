import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment-timezone'
import * as COLOR from "../../../../assets/color/ColorTemp";

export default function FormOrder(props) {
    const [isClicked,setIsClicked] = React.useState({margin:15,font:20})
    
    const { navigation, data } = props
    const endDate = moment(data.endDate).format('hh:mm ');
    const startDate = moment(data.startDate).format('hh:mm');

    const style = StyleSheet.create({
        Col_Form_Order: {
            width: '100%',
            height: '100%',
            // backgroundColor: 'red'
        },
        Col_Order_Info: {
            flexDirection: 'row',
            width: '100%',
            height: '40%',
            backgroundColor: 'white',
            padding: 5
        },
        Btn_Order: {
            flexGrow: 1,
            // backgroundColor: "blue",
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            backgroundColor: COLOR.MAIN_COLOR,
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
            marginLeft: isClicked.margin,
            marginRight: isClicked.margin
        },
        Col_Order_Info_PickUp: {
            width: '60%',
            height: '100%',
            // backgroundColor: "yellow",
            justifyContent: 'center',
            paddingLeft: 10,
            borderRadius: 10
        },
        Col_Order_Info_Avaliable: {
            width: '40%',
            height: '100%',
            // backgroundColor: "red",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10

        }
    })

    return (
        <View style={style.Col_Form_Order}>
            <Text>
            </Text>
            <View style={style.Col_Order_Info}>
                <View style={style.Col_Order_Info_PickUp}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>PICKUP TIME :</Text>
                    <Text>{startDate} - {endDate}</Text>
                </View>

                <View style={style.Col_Order_Info_Avaliable}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tersedia</Text>
                    <Text>{data.jlhItem - data.terjual} PCS</Text>
                </View>
            </View>

            <TouchableWithoutFeedback
                onPress={() => { navigation.navigate('Order', data) }}
                onPressIn={()=>setIsClicked({margin:20,font:19.5})}
                onPressOut={()=>setIsClicked({margin:15,font:20})}
            >
                <View style={style.Btn_Order}>
                    <Text
                        style=
                        {{
                            fontSize: isClicked.font,
                            fontWeight: 'bold',
                            color: COLOR.WHITE
                        }}>
                        PESAN SEKARANG</Text>
                </View>
            </TouchableWithoutFeedback>
        </View >
    )
}