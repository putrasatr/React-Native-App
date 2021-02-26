import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ContentLoader from 'react-native-masked-loader';

import { getLoading } from '../../../components/loading'
import * as COLOR from "../../../../assets/color/ColorTemp";
import defaultImg from '../../../../assets/logo/default.png'
import { Card } from 'react-native-paper';
import { loadMerchant } from '../../../../actions/menu'
import numToRupiah from "../../../components/numTorupiah/NumToRupiah"
import { API_URL } from "../../../../config/constant";

export default function MerchantDetail(props) {
    const loadingPage = getLoading();
    const dispatch = useDispatch()
    const navigation = useNavigation()

    React.useEffect(() => {
        dispatch(loadMerchant(props.data))
    }, [dispatch, props.data])

    const [loading, setLoading] = React.useState(true)
    const menu = useSelector(state => state.merchant.menu)
    const merchant = useSelector(state => state.merchant.merchant[0])

    const getImage = merchant.logo ? { uri: `${API_URL}images/uploads/` + merchant.logo } : defaultImg

    function LogoMerchant(props) {

        return (
            <View>
                <Image source={getImage} style={{ width: '100%', height: "100%", borderRadius: 10 }}></Image>
            </View>
        )
    }

    function AllMenu() {
        return menu.map((item, index) => {
            const foodImage = item.foto ? { uri: `${API_URL}images/uploads/` + item.foto } : defaultImg
            return (
                <View
                    style={{ width: '100%', height: 120, marginTop: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLOR.GREY, padding: 10, flexDirection: 'row' }}
                    key={index}>
                    <View style={{ width: '30%', height: '100%' }}>
                        <Image source={foodImage} style={{ width: '100%', height: "100%", borderRadius: 10 }}></Image>
                    </View>
                    <View style={{ width: '70%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.nama}</Text>
                        <Text>{numToRupiah(item.harga_asli)}</Text>
                    </View>
                </View>
            )
        })

    }

    setTimeout(() => { setLoading(false) }, 500);

    //Main Detail
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
                <Card.Content style={{ backgroundColor: 'white' }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flexDirection: 'column', backgroundColor: 'white', width: '100%', height: '100%' }}>
                        <TouchableWithoutFeedback
                            onPress={() => navigation.goBack()}>
                            <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={'arrow-left'} color={COLOR.BLACK} size={26} />
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={{ width: '100%', height: 90 }}>
                            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                                {merchant.nama}
                            </Text>
                            <Text style={{ color: 'grey' }}>
                                {merchant.alamat}
                            </Text>
                        </View>
                        <View style={{ width: '100%', height: 180, elevation: 5 }}>
                            <LogoMerchant />
                        </View>
                        <View style={{ width: '100%', height: 50, justifyContent: 'center', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1 }}>
                            <Text style={{ color: COLOR.BLACK, fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
                        </View>
                        <View>
                            <AllMenu />
                        </View>
                    </ScrollView>
                </Card.Content>
            </SafeAreaView >
        )
    }
}

const style = StyleSheet.create({
    IMGRST: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 0.85,
        borderColor: COLOR.GRAY,
        marginRight: 14,
        marginBottom: 14
    }

})