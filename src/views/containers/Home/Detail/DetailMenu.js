import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper'

import PictureMenu from './PictureMenu';
import DeskripsiMenu from './DeskripsiMenu';
import FormOrder from './FormOrder';


export default function DetailMenu(props) {
    
    const { navigation, data } = props
    return (
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
                <View style={style.Card_Title}>
                    <PictureMenu
                        style={{ backgroundColor: 'red' }}
                        data={data} />
                </View>
                <View style={style.Col_Info}>
                    <DeskripsiMenu data={data} />
                </View>
                <View style={style.Col_Button_Order}>
                    <FormOrder
                        navigation={navigation}
                        data={data} />
                </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    Card_Title: {
        width: '100%',
        height: 300,
        backgroundColor: 'white'
    },
    Col_Info: {
        width: '100%',
        height: 200,
        backgroundColor:'white'
    },
    Col_Button_Order: {
        width: '100%',
        height: 130,
        backgroundColor: 'white'
    }
})
