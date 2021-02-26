import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export const getLoading = () => {
    return (
        <>
            <View style={styles.Card}>
                <View
                    style={styles.Card_Body}>
                </View>
                <View style={styles.Card_Body_1}>
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                </View>
            </View>
            <View style={styles.Card_Text_2} />
            <View style={styles.Card_Text_2} />
            <View style={styles.Card_Body_Images}>
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
            </View>

            <View style={styles.Card}>
                <View
                    style={styles.Card_Body}>
                </View>
                <View style={styles.Card_Body_1}>
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                    <View style={styles.Card_Text_1} />
                </View>
            </View>
            <View style={styles.Card_Text_2} />
            <View style={styles.Card_Text_2} />
            <View style={styles.Card_Body_Images}>
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
                <View style={styles.Card_Image} />
            </View>
        </>

    );
}
const bordering = 10

const styles = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        // backgroundColor: 'white',
        // justifyContent:'center',
        width: '100%',
        height: '30%'
    },
    Card_Body: {
        backgroundColor: 'white',
        width: '40%',
        height: '100%',
        borderRadius: bordering
    },
    Card_Body_1: {
        flexDirection: 'column',
        width: '60%',
        height: '100%',
        marginLeft: 'auto',
        padding: 'auto'
    },
    Card_Text_1: {
        backgroundColor: 'white',
        width: '90%',
        height: '15%',
        borderRadius: bordering,
        marginTop: 'auto',
        marginLeft: 'auto'
    },
    Card_Text_2: {
        backgroundColor: 'white',
        width: '100%',
        height: '5%',
        borderRadius: bordering,
        marginTop: 10

    },
    Card_Body_Images: {
        flexDirection: 'row',
        width: '100%',
        height: '20%'
    },
    Card_Image: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 'auto'
    }
})