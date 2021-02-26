import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView, Image,Text } from 'react-native';
import moment from 'moment-timezone'

import noFav from '../../../assets/logo/emptyBowl.png'
import { loadFavorite } from "../../../actions/menu";
import FavoriteItem from './FavoriteItem'
import { Card } from 'react-native-paper';

const ListFavorite = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch()
    const idMember = useSelector(state=>state.member.data[0].id)
    const datas = useSelector(state => state.favorite)
    const isDatas = datas.data.length > 0

    let favorites = datas.data.map((item, index) => {
        return <FavoriteItem
            key={index}
            nama_makanan={item.nama_makanan}
            harga_asli={item.harga_normal}
            harga_diskon={item.harga_diskon}
            id_iklan={item.id_iklan}
            id_makanan={item.id_makanan}
            nama_merchant={item.nama_merchant}
            deskripsi={item.deskripsi}
            startDate={item.startDate}
            endDate={item.endDate}
            jlhItem={item.jlhItems}
            terjual={item.terjual}
            id_merchant={item.id_merchant}
            favorite={item.favorite}
            idFav={item.id_favorite}
            foto={item.foto} />
    });
    React.useEffect(() => {
        dispatch(loadFavorite(idMember))
    }, [dispatch, idMember])

    const now = moment(Date.now()).format('HHmm');
    
    return (
        <>
            {isDatas ?
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={style.Card_Favorite}>
                        {favorites}
                    </View>
                </ScrollView> :
                <Card.Content
                    style=
                    {{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style=
                        {{
                            width: '70%',
                            height: 300
                        }}>
                        <Image
                            source={noFav}
                            style=
                            {{
                                width: "100%",
                                height: '100%',
                                borderRadius:100
                            }} ></Image>
                    </View>
                    <View>
                        <Text 
                        style=
                        {{
                            fontSize:20,
                            color:'grey',
                            fontWeight:'bold'
                        }}>Kamu belum menambahkan favorit</Text>
                    </View>
                </Card.Content>
            }
        </>
    )
}

export default ListFavorite

const style = StyleSheet.create({
    Card_Favorite: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})