import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import defaultImg from '../../../../assets/logo/default.png';
import numToRupiah from "../../../components/numTorupiah/NumToRupiah"
import { API_URL } from "../../../../config/constant";

const BoxMenu = (props) => {
    const navigation = useNavigation();
    const { nama_makanan, foto, harga_diskon } = props
    const getImage = foto ? { uri: `${API_URL}images/uploads/` + foto } : defaultImg

    const handleLoad = () => {
        try {
            navigation.navigate('Detail', props)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => handleLoad()} >
            <View>
                <View style={style.BXMN}>
                    <View style={style.GMKN}>
                        <Image
                            source={getImage}
                            style={style.IMGMKN}>
                        </Image>
                    </View>
                    <View style={style.FTRAD}>
                        <Text style={style.TXTHR}>{nama_makanan}</Text>
                    </View>
                    <Text
                        style=
                        {{
                            fontSize: 14,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10
                        }}>Rp {numToRupiah(harga_diskon)}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default BoxMenu

const BORDER_RADIUS_DEF = 3

const style = StyleSheet.create({
    BXMN: {
        width: 120,
        height: 170,
        shadowRadius: 100,
        elevation: 3,
        backgroundColor: 'white',
        borderColor: '#c5c5c5af',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: BORDER_RADIUS_DEF
    },
    GMKN: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        zIndex: 2,
        flexGrow: 1
    },
    IMGMKN: {
        width: '100%',
        height: '100%',
        borderRadius: BORDER_RADIUS_DEF,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    LGORST: {
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#eaeaea',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#c5c5c5c7'

    },
    FTRAD: {
        width: '100%',
        height: '60%',
        borderRadius: BORDER_RADIUS_DEF,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    DSMKN: {
        height: '100%',
        borderRadius: BORDER_RADIUS_DEF,
        paddingLeft: 10,
        flex: 0.7,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TXTHR: {
        flexWrap: 'wrap',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    }
})