import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity, Image, RefreshControl, SafeAreaView } from 'react-native';
import { ActivityIndicator, Card } from 'react-native-paper';
import ContentLoader from 'react-native-masked-loader';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getDistance } from 'geolib';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";

import { getLoading } from '../../../components/loading'
import { style } from "../../../../styles";
import * as COLOR from "../../../../assets/color/ColorTemp";
import shop from "../../../../assets/logo/shop.png";
import noData from "../../../../assets/logo/kosong.png";
import { loadMenu, loadMerchant } from "../../../../actions/menu";
import MerchantList from "../Merchant/MerchantList";
import BoxMenu from "./BoxMenu";
import { B, A, N, NE } from '../../../components/banner'

function HomePageScreen(props) {
    // console.log('Kamu ', getDistance({
    //     latitude: -6.93877441097372,
    //     longitude: 107.59509468205879,
    // },
    //     {
    //         latitude: -6.938479110419678,
    //         longitude: 107.59504331762477
    //     }), 'Meter dari Tujuan')

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const loadingPage = getLoading();

    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = React.useState(true)
    const [loadpage, setLoadPage] = React.useState(true)
    const [limit, setLimit] = React.useState(4)

    const datas = useSelector(state => state.menu)
    const restaurant = useSelector(state => state.merchant.restaurant)
    const bakery = useSelector(state => state.merchant.bakery)
    const isData = datas.length > 0

    React.useEffect(() => {
        dispatch(loadMenu(limit))
        dispatch(loadMerchant('undefined'))
    }, [dispatch, limit])

    const onScroll = () => {
        if (datas.length == limit) {
            setLimit(limit + 4)
            setTimeout(() => { setLoadPage(false) }, 2000);
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(loadMenu(limit))
        setTimeout(() => { setRefreshing(false) }, 1000);
    }, [dispatch, limit]);

    setTimeout(() => { setLoading(false), setLoadPage(false) }, 1000);

    if (loading) {
        return (
            <Card.Content
                style=
                {
                    {
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        padding: 10
                    }
                }
            >
                <ContentLoader MaskedElement={loadingPage} />

            </Card.Content>
        )
    } else {
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ backgroundColor: 'white' }}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }  >



                    <Card.Content>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            style={{ height: 170 }}>
                            <View style={{ width: 310, height: 150, marginBottom: 10, marginRight: 15, marginTop: 10, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                                {refreshing ? null : <B />}

                            </View>
                            <View style={{ width: 300, height: 130, marginBottom: 10, marginRight: 15, marginTop: 10, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                                {refreshing ? null : <A />}
                            </View>
                            <View style={{ width: 300, height: 130, marginBottom: 10, marginRight: 15, marginTop: 10, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                                {refreshing ? null : <N />}
                            </View>
                            <View style={{ width: 300, height: 130, marginBottom: 10, marginRight: 15, marginTop: 10, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                                {refreshing ? null : <NE />}
                            </View>
                        </ScrollView>
                        <View
                            style=
                            {
                                {
                                    backgroundColor: COLOR.WHITE,
                                    borderTopWidth: 1,
                                    borderTopColor: '#eaeaea'
                                }
                            }>
                            <Text style={style.TXRT_HOME}>{isData ? 'Makanan' : 'Tidak Ada Iklan'}</Text>
                        </View>

                        <ScrollView
                            style={style.boxPage_HOME}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            onScrollEndDrag={(e) => onScroll(e)}>
                            <View style={style.adv_HOME}>
                                {isData ?
                                    <View style={style.content_HOME}>
                                        {
                                            refreshing ? datas.map((item, index) => <View>
                                                <View style={style.BXMN} key={index}>
                                                    <View style={style.GMKN} key={index + 1}>
                                                    </View>
                                                    <View style={style.FTRAD} key={index + 2}>
                                                    </View>
                                                </View>
                                            </View>) :
                                                datas.map((item, index) =>
                                                    <BoxMenu
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
                                                        foto={item.foto}
                                                        logo={item.logo}
                                                        alamat={item.alamat}
                                                        token={item.token_uid}
                                                    />
                                                )
                                        }
                                    </View>
                                    : <View style={style.idk_image}>
                                        <Image source={noData} style={style.imagenya} />
                                    </View>}
                                {loadpage ?
                                    <View style={style.content_HOME}>
                                        <ActivityIndicator
                                            color={COLOR.GRAY}>

                                        </ActivityIndicator>
                                    </View> : <></>
                                }
                            </View>
                        </ScrollView>

                        {/* <View style={{ width: 76, height: 80, flexDirection: 'column', marginBottom: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '100%', height: '90%', elevation: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={shop} style={{ width: '90%', height: '90%', borderRadius: 20 }}></Image>
                            </View>
                            <View style={{
                                width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom
                                    : 10
                            }}>
                                <Text style={{ fontWeight: 'bold' }}>Terdekat</Text>
                            </View>
                        </View> */}

                        <View
                            style=
                            {
                                {
                                    flexDirection: 'row',
                                    backgroundColor: COLOR.WHITE,
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLOR.GRAY,
                                    marginBottom: 20,
                                    paddingBottom: 10,
                                    marginTop:20
                                }
                            }>

                            <View style={style.TXRT_HOME}>
                                <Text style={style.TXRT_HOME}>Merchant</Text>
                            </View>
                            <View style={style.LOKLL_HOME}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Merchant All')}
                                    style=
                                    {
                                        {
                                            backgroundColor: COLOR.SECONDARY_COLOR,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            borderRadius: 10
                                        }
                                    }>
                                    <Text style={{ color: 'white' }}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={style.TXRT_HOME}>
                            <Text style={style.TXRT_HOME}>{<MaterialCommunityIcons name={'home'} size={16} color={COLOR.BLACK} />} Restaurant</Text>


                        </View>
                        <ScrollView
                            style={style.ScrollMerchant}
                            showsHorizontalScrollIndicator={false}
                            horizontal>
                            {restaurant.map((item, index) =>
                                <MerchantList
                                    key={index}
                                    logo={item.logo}
                                    id_merchant={item.id} />
                            )}
                        </ScrollView>

                        <View
                            style=
                            {
                                {
                                    flexDirection: 'row',
                                    backgroundColor: COLOR.WHITE
                                }
                            }>
                            <View style={style.TXRT_HOME}>
                                <Text style={style.TXRT_HOME}>{<MaterialCommunityIcons name={'cupcake'} size={16} color={COLOR.BLACK} />} Bakery</Text>
                            </View>
                        </View>
                        <ScrollView
                            style={style.ScrollMerchant}
                            showsHorizontalScrollIndicator={false}
                            horizontal>
                            {bakery.map((item, index) =>
                                <MerchantList
                                    key={index}
                                    logo={item.logo}
                                    id_merchant={item.id} />

                            )}
                        </ScrollView>
                    </Card.Content>
                </ScrollView >
            </SafeAreaView>
        )
    }
}

export default HomePageScreen