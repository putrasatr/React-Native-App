import { StyleSheet } from 'react-native';
import * as COLOR from "../assets/color/ColorTemp";

const BORDER_RADIUS_DEF = 3

export const style = StyleSheet.create({
    adv_HOME: {
        flexDirection: 'row'
    },
    boxPage_HOME: {
        backgroundColor: COLOR.WHITE
    },
    content_HOME: {
        flexDirection: 'row',
    },
    TXRT_HOME: {
        fontWeight: 'bold',
        width: '70%',
        fontSize: 16,
        color: COLOR.BLACK,
        fontFamily: 'Cochin',
        flexWrap:'wrap'
    },
    LOKLL_HOME: {
        alignItems: 'center',
        borderRadius: 20,
        width: '30%'
    },
    ScrollMerchant: { 
        backgroundColor: COLOR.WHITE,
        paddingTop: 10,
        borderBottomColor: COLOR.GREY,
        borderBottomWidth: 2,
        marginBottom: 10
    },
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
        flexGrow: 1,
        backgroundColor:COLOR.GRAY
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
    },
    idk_image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red'
    },
    imagenya: {
        width: '70%',
        height: '70%'
    }
})
