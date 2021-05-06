import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-native-masked-loader';

import { getLoading } from '../../../components/loading'
import * as COLOR from "../../../../assets/color/ColorTemp";
import defaultImg from '../../../../assets/logo/default.png'
import { Card } from 'react-native-paper';
import { loadMerchant } from '../../../../actions/menu'
import { API_URL } from "../../../../config/constant";

export default function MerchantAll() {
    const loadingPage = getLoading();
    const dispatch = useDispatch()
    const navigation = useNavigation()

    React.useEffect(() => {
        dispatch(loadMerchant('undefined'))
    }, [dispatch])

    const [loading, setLoading] = React.useState(true)
    const menu = useSelector(state => state.merchant.menu)
    const restaurant = useSelector(state => state.merchant.restaurant)
    const bakery = useSelector(state => state.merchant.bakery)


    function AllRestaurant() {

        return restaurant.map((item, index) => {
            const foodImage = item.logo ? { uri: `${API_URL}images/uploads/` + item.logo } : defaultImg
            return (
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Merchant', item.id)}>
                    <View
                        style={{ width: '100%', height: 120, marginTop: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLOR.GREY, padding: 10, flexDirection: 'row' }}
                        key={index}>
                        <View style={{ width: '30%', height: '100%' }}>
                            <Image source={foodImage} style={{ width: '100%', height: "100%", borderRadius: 10 }}></Image>
                        </View>
                        <View style={{ width: '70%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.nama}</Text>
                            <Text>{item.alamat}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        })

    }
    function AllBakery() {

        return bakery.map((item, index) => {
            const foodImage = item.logo ? { uri:  `${API_URL}images/uploads/` + item.logo } : defaultImg
            return (
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Merchant', item.id)}>
                    <View
                        style={{ width: '100%', height: 120, marginTop: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLOR.GREY, padding: 10, flexDirection: 'row' }}
                        key={index}>
                        <View style={{ width: '30%', height: '100%' }}>
                            <Image source={foodImage} style={{ width: '100%', height: "100%", borderRadius: 10 }}></Image>
                        </View>
                        <View style={{ width: '70%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.nama}</Text>
                            <Text>{item.alamat}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        })

    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <Card.Content>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View>
                        <AllRestaurant />
                    </View>
                    <View>
                        <AllBakery />
                    </View>
                </ScrollView>
            </Card.Content>
        </SafeAreaView>
    )
}