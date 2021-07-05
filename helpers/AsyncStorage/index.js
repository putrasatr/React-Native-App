import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (token) => {
    try {
        await AsyncStorage.setItem('Auth', token)
        return new Promise(resolve => {
            resolve(AsyncStorage)
        })
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const removeToken = async () => {
    try {
        // await AsyncStorage.getItem('Auth')
        await AsyncStorage.removeItem('Auth');
        return new Promise(resolve => {
            resolve(AsyncStorage)
        })
    }
    catch (exception) {
    }
}
