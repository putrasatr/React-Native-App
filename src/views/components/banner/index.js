import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, RefreshControl, SafeAreaView } from 'react-native';

import pic from "../../../assets/logo/adHome.png";
import picc from "../../../assets/logo/lorem.png";
import piccc from "../../../assets/logo/think.png";
import picccc from "../../../assets/logo/banner.png";

import * as COLOR from "../../../assets/color/ColorTemp"
export const B = () => {
    return (
        <>
            <View style={{ width: '100%', height: 150, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                <Image source={pic} style={{ width: '100%', height: '100%', borderRadius: 20 }}></Image>
            </View>
        </>
    )
}

export const A = () => {
    return (
        <>
            <View style={{ width: '100%', height: 150, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                <Image source={picc} style={{ width: '100%', height: '100%', borderRadius: 20 }}></Image>
            </View>
        </>
    )
}
export const N = () => {
    return (
        <>
            <View style={{ width: '100%', height: 150, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                <Image source={piccc} style={{ width: '100%', height: '100%', borderRadius: 20 }}></Image>
            </View>
        </>
    )
}
export const NE = () => {
    return (
        <>
            <View style={{ width: '100%', height: 150, backgroundColor: COLOR.GRAY, borderRadius: 20 }}>
                <Image source={picccc} style={{ width: '100%', height: '100%', borderRadius: 20 }}></Image>
            </View>
        </>
    )
}