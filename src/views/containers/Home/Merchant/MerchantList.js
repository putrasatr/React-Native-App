import * as React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as COLOR from "../../../../assets/color/ColorTemp";
import { loadMerchant } from '../../../../actions/menu'
import {API_URL} from "../../../../config/constant"

export default function MerchantList(props) {
    const { logo, id_merchant } = props
    const dispatch = useDispatch()
    const navigation = useNavigation()

    React.useEffect(() => {
        dispatch(loadMerchant(id_merchant))
    }, [dispatch])

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Merchant', id_merchant)}>
                <Image
                    style={style.IMGRST}
                    source={{ uri: `${API_URL}images/uploads/` + logo }}></Image>
            </TouchableWithoutFeedback>
        </View>
    )
}


const style = StyleSheet.create({
    IMGRST: {
        width: 65,
        height: 65,
        borderRadius: 50,
        borderWidth: 0.85,
        borderColor: COLOR.GRAY,
        marginRight: 14,
        marginBottom: 14
    }

})