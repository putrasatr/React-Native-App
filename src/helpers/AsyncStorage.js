import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (token) => {
    try {
        await AsyncStorage.setItem('Auth', token)
    } catch (e) {
        console.log(e);
        return '';
    }
};
export let tokenConvert = '';
export const getAuth = async () => {
    try {
        const token = await AsyncStorage.getItem('Auth')
        if (token !== null) {
            return tokenConvert += token;
        }
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const removeToken =async () => {
    try {
        const token = await AsyncStorage.getItem('Auth')
        AsyncStorage.removeItem('Auth');
    }
    catch (exception) {
    }
}

