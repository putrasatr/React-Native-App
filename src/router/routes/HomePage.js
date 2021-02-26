import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import * as COLOR from "../../assets/color/ColorTemp";
import { forFade, config } from "../../views/components/movePageStyle";
import DetailMenu from '../../views/containers/Home/Detail/DetailMenu';
import Home from "../../views/containers/Home/List/Home";
import MenuConfirm from '../../views/containers/Home/Detail/MenuConfirm';
import MerchantDetail from "../../views/containers/Home/Merchant/MerchantDetail";
import OrderInvoice from "../../views/containers/Order/OrderInvoice";
import MerchantAll from '../../views/containers/Home/Merchant/MerchantAll';

function HomeScreen(props) {
    const navigation = useNavigation();

    return (
        <Home
            style={{ backgroundColor: 'white' }}
            navigation={navigation}
            {...props} />
    )
}

function DetailMenuScreen(props) {
    const navigation = useNavigation();
    const { route } = props

    return (
        <DetailMenu
            style={{ backgroundColor: 'white' }}
            navigation={navigation}
            data={route.params} />
    )
}

function MenuConfirmScreen(props) {
    const navigation = useNavigation();
    const { route } = props
    
    return (
        <MenuConfirm
            style={{ backgroundColor: 'white' }}
            navigation={navigation}
            data={route.params} />
    )
}


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

function MerchantAllScreen() {
    const navigation = useNavigation();

    return (
        <MerchantAll
            style={{ backgroundColor: 'white' }}
            navigation={navigation}/>
    )
}

const Stack = createStackNavigator();

export default function HomePage() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home | Last Hour Food Sale"
                component={HomeScreen}
                options=
                {{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' }
                }}
            />
            <Stack.Screen
                name="Detail"
                headerMode={'none'}
                component={DetailMenuScreen}
                options=
                {{
                    headerTintColor: COLOR.BLACK,
                    headerStyleInterpolator: forFade,
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Order"
                component={MenuConfirmScreen}
                options=
                {{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerStyleInterpolator: forFade
                }}
            />
            <Stack.Screen
                name="Order Invoice"
                component={OrderInvoice}
                TabBarVisible={false}
                options=
                {{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    // headerStyleInterpolator: forFade
                }}
            />
            <Stack.Screen
                name="Merchant"
                component={MerchantDetailScreen}
                options=
                {{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerShown:false
                    // headerStyleInterpolator: forFade
                }}
            />
             <Stack.Screen
                name="Merchant All"
                component={MerchantAllScreen}
                options=
                {{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    // headerShown:false
                    // headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    );
}