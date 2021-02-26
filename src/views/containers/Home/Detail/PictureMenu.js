import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { addFavorite, loadMenu, deleteFavorite, loadFavorite } from '../../../../actions/menu'
import defaultImg from '../../../../assets/logo/default.png';
import * as COLOR from "../../../../assets/color/ColorTemp";
import numToRupiah from "../../../components/numTorupiah/NumToRupiah"
import { API_URL } from "../../../../config/constant";

export default function PictureMenu(props) {
    const { data } = props
    const idMember = useSelector(state => state.member.data[0].id)
    const [isFavorite, setFavorite] = React.useState(data.favorite ? true : false)
    const [isClicked, setClicked] = React.useState(30)
    const getImage = data.foto ? { uri: `${API_URL}images/uploads/` + data.foto } : defaultImg

    const dispatch = useDispatch()

    const id = useSelector(state => state.favorite)
    const id_member = useSelector(state => state.member.data[0].id)

    const handleFavorite = () => {
        setFavorite(!isFavorite)
        if (!isFavorite) {
            dispatch(addFavorite(data.id_iklan, data.id_makanan, id_member, data.id_merchant))
            setTimeout(() => { dispatch(loadMenu(11)), dispatch(loadFavorite(id_member)) }, 450);
        } else {
            dispatch(deleteFavorite(data.idFav ? data.idFav : id))
        }
    }


    return (
        <View style={style.Card}>

            <View style={style.Card_Image}>
                <View style={{ position: 'absolute', width: '100%', height: '10%' }}>
                    <Text>Back</Text>
                </View>
                <Image
                    source={getImage}
                    style=
                    {{
                        width: '100%',
                        height: '100%'
                    }}>
                </Image>
            </View>

            <View style={style.Card_Body}>
                <View style={style.Card_Text}>
                    <Text style={style.Card_Title}>{data.nama_makanan}</Text>
                    <View style={style.Card_Footer}>
                        <Text
                            style={{ fontSize: 19 }}>
                            Rp {numToRupiah(data.harga_diskon)}
                        </Text>
                        <Text style={style.Card_Footer_Number}>Rp {numToRupiah(data.harga_asli)}</Text>
                        <View
                            style={
                                {
                                    width: '30%',
                                    height: '90%',
                                    backgroundColor: COLOR.MAIN_COLOR,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    marginLeft: 10
                                }
                            }>
                            <Text
                                style=
                                {{
                                    color: 'white',
                                    fontSize: 19
                                }}>
                                Diskon</Text>
                        </View>
                    </View>
                </View>
                <View style={style.Btn_Favorite}>
                    <TouchableWithoutFeedback
                        onPress={() => handleFavorite()}
                        onPressIn={() => setClicked(33)}
                        onPressOut={() => setClicked(30)}
                        sty>
                        <MaterialCommunityIcons
                            name={isFavorite ? "heart" : "heart-outline"}
                            color={isFavorite ? COLOR.RED : COLOR.BLACK}
                            size={isClicked} />
                    </TouchableWithoutFeedback>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    Card_Image: {
        width: '100%',
        height: '60%',
    },
    Card: {
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
    },
    Card_Body: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        backgroundColor: "white",
    },
    Card_Text: {
        width: '80%',
        backgroundColor: 'white',
        padding: 7
    },
    Card_Title: {
        fontSize: 25,
        fontFamily: 'lead',
        fontWeight: 'bold',

    },
    Card_Footer_Number: {
        textDecorationLine: 'line-through',
        paddingLeft: 10,
        fontSize: 18,
        color: "grey"

    },
    Card_Footer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    Btn_Favorite: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})