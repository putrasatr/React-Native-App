import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native'
import moment from 'moment-timezone'

import { addFavorite, loadMenu, deleteFavorite, loadFavorite } from '../../../actions/menu'
import * as COLOR from "../../../assets/color/ColorTemp";
import image from "../../../assets/logo/default.png"
import numToRupiah from "../../components/numTorupiah/NumToRupiah"

export default function FavoriteItem(props) {
    useEffect(() => {
        dispatch(getLoadingDone(true))
        AsyncStorage.getItem('Auth')
            .then((value) => {
                if (value) {
                    const { idSekolah } = JwtDecode(value)
                    return new Promise(resolve => {
                        resolve(idSekolah)
                    })
                }
            }).then((res) => {
                dispatch(getERaport(res))
            })
        return () => {

        }
    }, [AsyncStorage])

    const id = useSelector(state => state.favorite.data)
    const { nama_merchant,
        nama_makanan,
        deskripsi,
        harga_diskon,
        harga_asli,
        jlhItem,
        terjual,
        endDate,
        idFav,
        id_iklan,
        id_makanan,
        id_merchant, favorite
    } = props

    const [isClicked, onClick] = React.useState({ value: favorite, size: 25 });
    const idMember = useSelector(state => state.member.data[0].id)

    const endTime = moment(endDate).format('HHmm');
    const now = moment(Date.now()).format('HHmm');

    const isReady = Number(jlhItem) - Number(terjual) > 0 && endTime > now

    const handleFavorite = () => {
        onClick({ value: isClicked.value, size: 25 })
        if (isClicked.value) {
            dispatch(addFavorite(id_iklan, id_makanan, idMember, id_merchant), [dispatch, isClicked.value])
            setTimeout(() => { dispatch(loadMenu(11)), dispatch(loadFavorite(idMember)) }, 500);
        } else {
            dispatch(deleteFavorite(idFav ? idFav : id.id_favorite))
            setTimeout(() => { dispatch(loadMenu(11)), dispatch(loadFavorite(idMember)) }, 500);
        }
    }

    const BORDER_RAD_FAV = 8
    const style = StyleSheet.create({
        Card_Item_Favorite: {
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
            height: '30%',
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 10,
            borderBottomWidth: 2,
            borderColor: COLOR.GREY,
            borderTopLeftRadius: BORDER_RAD_FAV,
            borderTopRightRadius: BORDER_RAD_FAV,
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
            backgroundColor: COLOR.GRAY,
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
            // backgroundColor: 'yellow',
            flexDirection: 'column'
        },
        Card_Text_Deskripsi_Name: {
            width: '100%',
            height: '70%',
            paddingLeft: 10
            // backgroundColor:'blue'
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
            height: '20%',
            flexDirection: 'row'
        },
        Card_Footer_Number: {
            textDecorationLine: 'line-through',
            paddingLeft: 10,
            fontSize: 13,
            color: "grey"

        },
        Card_Footer_Btn_Fav: {
            width: '10%',
            height: '100%',
            backgroundColor: 'white'
        },
        Card_Footer_Btn_Order: {
            backgroundColor: isReady ? COLOR.MAIN_COLOR : COLOR.GRAY,
            borderRadius: 10,
            width: '70%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto'
        }
    })
    return (
        <>
            <View style={style.Card_Item_Favorite}>
                <View style={style.Card}>

                    <View style={style.Card_Title_Merchant}>
                        <Text style={style.Text_Merchant}>{nama_merchant}</Text>
                    </View>

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
                                    <Text>{deskripsi}</Text>
                                </View>
                                <View style={style.Card_Text_Deskripsi_Footer}>
                                    <Text style={{ fontSize: 15 }}>{numToRupiah(harga_diskon)}</Text>
                                    <Text style={style.Card_Footer_Number}>{numToRupiah(harga_asli)}</Text>
                                    <View
                                        style=
                                        {{
                                            width: '30%',
                                            height: '60%',
                                            backgroundColor: COLOR.SECONDARY_COLOR,
                                            borderRadius: 10, alignItems: 'center',
                                            justifyContent: 'center',
                                            marginLeft: 10
                                        }}>
                                        <Text
                                            style=
                                            {{
                                                color: 'white',
                                                fontSize: 15
                                            }}
                                        >Promo</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={style.Card_Footer}>
                            <View style={style.Card_Footer_Btn_Fav}>
                                <TouchableWithoutFeedback
                                    onPress={() => handleFavorite()}
                                    onPressIn={() => onClick({ value: !isClicked.value, size: 26 })}
                                    onPressOut={() => onClick({ value: isClicked.value, size: 25 })}
                                >
                                    <MaterialCommunityIcons name={isClicked.value ? "heart" : "heart-outline"} color={isClicked.value ? COLOR.RED : COLOR.BLACK} size={isClicked.size} />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={style.Card_Footer_Btn_Order}>
                                <TouchableWithoutFeedback
                                    onPress={() => isReady ? navigation.navigate('Detail', props) : ''}>
                                    <Text style={{ color: COLOR.WHITE }}>{isReady ? 'Pesan' : 'Kosong'}</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}


