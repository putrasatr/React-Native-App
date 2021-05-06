import * as React from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from 'react-redux';
import { convertArea } from 'geolib';
import { useNavigation } from '@react-navigation/native';

import MerchantDetail from "../../views/containers/Home/Merchant/MerchantDetail"
import logo from "../../assets/logo/ic_launcher_round.png";
import logos from "../../assets/logo/default.png";
import * as COLOR from "../../assets/color/ColorTemp"
import { ScrollView } from 'react-native-gesture-handler';
import { searchData } from '../../actions/menu';
import {API_URL} from '../../config/constant'

function SearchPageScreen() {
    const [search, onChangeText] = React.useState('');
    const [limit, setLimit] = React.useState(4);
    const dispatch = useDispatch()
    const menu = useSelector(state => state.search.menu)
    const merchant = useSelector(state => state.search.merchant)
    React.useEffect(() => {
        dispatch(searchData(limit, search))
    }, [dispatch, limit, search])

    function Merchant(props) {
        const navigation = useNavigation()

        const { logo, nama, id } = props
        const LogoMerchant = logo ? { uri: `${API_URL}images/uploads/` + logo } : logos

        return (
            <>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Merchant', id)}>
                    <Image source={LogoMerchant} style={{ width: 70, height: 70, borderRadius: 50, marginRight: 10, borderWidth: 1, borderColor: COLOR.GREY }}></Image>
                </TouchableWithoutFeedback>
                <Text>{nama}</Text>
            </>
        )
    }
    function Menu(props) {
        const { nama, foto, harga_asli } = props
        const fotoMenu = foto ? { uri: `${API_URL}images/uploads/` + foto } : logos

        return (
            <View
                style={{ width: '100%', height: 120, marginTop: 10, borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLOR.GREY, padding: 10, flexDirection: 'row' }}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image source={fotoMenu} style={{ width: '100%', height: "100%", borderRadius: 10 }}></Image>
                </View>
                <View style={{ width: '70%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}>
                    <Text>{nama}</Text>
                    <Text>{harga_asli}</Text>
                </View>
            </View>
        )
    }
    
    function MerchantText() {
        return (
            <View
                style=
                {
                    {
                        flexDirection: 'row',
                        backgroundColor: COLOR.WHITE,
                        borderBottomWidth: 1,
                        borderBottomColor: COLOR.GRAY,
                        marginBottom: 20,
                        paddingBottom: 10
                    }
                }>

                <View style={style.Merchant}>
                    <Text >Merchant</Text>
                </View>
                <View style={style.Lihat_Semua}>
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
        )
    }
    function MenuText() {
        return (
            <View
                style=
                {
                    {
                        flexDirection: 'row',
                        backgroundColor: COLOR.WHITE,
                        borderBottomWidth: 1,
                        borderBottomColor: COLOR.GRAY,
                        marginBottom: 20,
                        paddingBottom: 10
                    }
                }>

                <View style={style.Merchant}>
                    <Text >Makanan</Text>
                </View>
                <View style={style.Lihat_Semua}>
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
        )
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE }}>
            <View style={style.container}>
                <View style={style.boxLogo}>
                    <Image
                        style={style.logo}
                        source={logo}>
                    </Image>
                </View>
                <View style={style.boxInput}>
                    <View
                        style=
                        {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 5,
                            width: '10%'
                        }}>
                        <MaterialCommunityIcons
                            name="magnify"
                            color={'grey'}
                            size={26} />
                    </View>
                    <TextInput
                        style=
                        {{
                            height: 40,
                            borderBottomColor: 'black',
                            marginLeft: 10,
                            width: 'auto'
                        }}
                        onChangeText={text => onChangeText(text)}
                        value={search}
                        placeholder='Makan Apa Hari Ini?'
                        underlineColor={'black'}
                        selectionColor={'black'}
                        keyboardType={'twitter'}
                        backgroundColor={'white'}
                    >
                    </TextInput>
                    {/* <MaterialCommunityIcons name="magnify" color={color} size={26} /> */}

                </View>
            </View>
            {search.length > 0 ?
                <ScrollView>
                    <Card.Content>

                        {/* MERCHANT */}
                        <MerchantText />

                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal>
                            <View style={{ width: '100%', height: 100 }}>
                                <View style={{ width: '100%', height: '100%', justifyContent: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                                    {merchant.length > 0 ?
                                        merchant.map((item, index) =>
                                            <Merchant
                                                key={index}
                                                alamat={item.alamat}
                                                nama={item.nama}
                                                logo={item.logo}
                                                id={item.id} />
                                        ) : <Text style={{color:COLOR.GRAY}}>Tidak Ada Yang Cocok</Text>}
                                </View>
                            </View>
                        </ScrollView>

                        {/* MENU */}
                        <MenuText />
                        <ScrollView>
                            {menu.length > 0 ?
                                menu.map((item, index) =>
                                    <Menu
                                        key={index}
                                        nama={item.nama}
                                        harga_asli={item.harga_asli}
                                        foto={item.foto} />
                                ) : <Text style={{color:COLOR.GRAY}}>Tidak Ada Yang Cocok</Text>}
                        </ScrollView>
                    </Card.Content>
                </ScrollView> : <></>}
        </SafeAreaView>
    )
}
const Stack = createStackNavigator();
function MerchantDetailScreen(props) {
    const navigation = useNavigation();
    const { route } = props

    return (
        <MerchantDetail
            style={{ backgroundColor: 'white' }}
            navigation={navigation}
            data={route.params} />
    )
}
export default function SeacrhPage() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchPageScreen}
                options=
                {{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Merchant"
                component={MerchantDetailScreen}
                options=
                {{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerShown: false
                    // headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    },
    logo: {
        width: 20,
        height: 20,
        marginTop: 6,
    },
    boxLogo: {
        width: '13%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    boxInput: {
        width: '80%',
        height: '70%',
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    boxButton: {
        width: '20%',
        height: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        // backgroundColor: 'black'
    },
    Merchant: {
        width: '50%',
        height: '100%'
    }
})

