import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, ScrollView, Image, SafeAreaView ,View} from 'react-native';
import ContentLoader from 'react-native-masked-loader';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-native-paper';

import { getLoading } from '../../views/components/loading'
import noOrder from "../../assets/logo/favorite.png";
import { loadOrder } from "../../actions/menu";
import * as COLOR from "../../assets/color/ColorTemp";
import { useNavigation } from '@react-navigation/native';
import ProfileEdit from "../../views/containers/Profile/editProfile/ProfileEdit";
import OrderItem from '../../views/containers/Order/OrderItem';
import OrderInvoice from "../../views/containers/Order/OrderInvoice";
import { forFade } from "../../views/components/movePageStyle";

const Stack = createStackNavigator()

function OrderScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [loading, setLoading] = React.useState(true)

    const MaskedElement = getLoading();
    const data = useSelector(state => state.order)
    const id_member = useSelector(state => state.member.data[0].id)
    
    React.useEffect(() => {
        dispatch(loadOrder(id_member))
    }, [dispatch,id_member])

    setTimeout(() => { setLoading(false) }, 900);


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
                <ContentLoader MaskedElement={MaskedElement} />

            </Card.Content>
        )
    } else {
        if (data.length > 0) {
            return (
                <SafeAreaView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        {
                            data.map((item, index) => {
                                return <OrderItem
                                    key={index}
                                    style={{ backgroundColor: 'white' }}
                                    {...props}
                                    navigation={navigation}
                                    dataOrder={item}
                                />
                            })
                        }
                    </ScrollView>
                </SafeAreaView>

            )
        } else {
            return (
                <SafeAreaView>
                    <Card.Content
                    style=
                    {{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style=
                        {{
                            width: '70%',
                            height: 300
                        }}>
                        <Image
                            source={noOrder}
                            style=
                            {{
                                width: "100%",
                                height: '100%'
                            }} ></Image>
                    </View>
                    <View>
                        <Text 
                        style=
                        {{
                            fontSize:20,
                            color:'grey',
                            fontWeight:'bold'
                        }}>Kamu Belum Memesan</Text>
                    </View>
                </Card.Content>
                </SafeAreaView>
            )
        }
    }
}

function EditProfileScreen({ navigation }) {
    return (
        <ProfileEdit />
    )
}

export default function Profile() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pesanan Anda"
                component={OrderScreen}
                options={{
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options=
                {{
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
                    headerTintColor: COLOR.BLACK,
                    headerStyle: { backgroundColor: 'white' },
                    headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    );
}
