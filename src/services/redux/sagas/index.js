import { all, takeEvery, put, call } from 'redux-saga/effects';
import { storeData, removeToken } from '../../helpers/AsyncStorage';
import request from '../../actions/connect';
import * as actions from '../../actions/menu';

const load = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const remove = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const postLogin = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
const getLogout = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const PATH = '/api'

//loadAd
function* loadMenu(payload) {
    const { limit } = payload
    try {
        const data = yield call(load, `${PATH}/putra/${limit}`);
        yield put(actions.loadMenuSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadMenuFailure());
    }
}

//loadOrder
function* loadOrder(payload) {
    const { id } = payload
    try {
        const data = yield call(load, `${PATH}/order/${id}`);
        yield put(actions.loadOrderSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadOrderFailure());
    }
}

//addOrder
function* addOrder(payload) {
    const { token } = payload
    try {
        yield call(add, `${PATH}/firebase/sendNotif`, { token });
        const data = yield call(add, `${PATH}/putra`, { payload });
        yield put(actions.addOrderSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.addOrderFailure());
    }
}

//addFavorite
function* addFavorite(payload) {
    const id = Date.now()
    try {
        yield call(add, `${PATH}/favorite`, { payload, id });
        yield put(actions.addFavoriteSuccess(id));
    } catch (error) {
        console.log(error);
        yield put(actions.addFavoriteFailure());
    }
}

//deleteFavorite
function* deleteFavorite(payload) {
    const { id } = payload
    try {
        const data = yield call(remove, `${PATH}/favorite/${id}`);
        yield put(actions.deleteFavoriteSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.deleteFavoriteFailure());
    }
}

//loadFavorite
function* loadFavorite(payload) {
    const { id } = payload
    try {
        const data = yield call(load, `${PATH}/favorite/${id}`);
        yield put(actions.loadFavoriteSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadFavoriteFailure());
    }
}

//loadMerchant
function* loadMerchant(payload) {
    const { id } = payload
    try {
        const data = yield call(load, `${PATH}/merchant/${id}`);
        yield put(actions.loadMerchantSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadMerchantFailure());
    }
}
//Login
function* login(payload) {
    const { email, password, navigation } = payload;
    try {
        const data = yield call(postLogin, `${PATH}/member/login`, { email, password })
        const token = data.token
        if (data.msg === 'not exist') return yield put(actions.loginFailure(data.msg))
        storeData(token)
        yield put(actions.loginSuccess(data.data))
        navigation.reset({
            index: 0,
            routes: [{ name: 'Tab Navigator' }],
        })
    } catch (error) {
        console.log(error)
        yield put(actions.loginFailure(email))
    }
}
//Register
function* register(payload) {
    const { email, password, repassword, navigation, username } = payload;
    try {
        const data = yield call(postLogin, `${PATH}/member/register`, { email, password, repassword, username })
        const token = data.token
        if (data.msg === 'Email already exists' || data.msg === 'Password not match') {
            yield put(actions.registerFailure(data.msg))
        } else {
            storeData(token)
            const datas = [{ email, password, username }]
            yield put(actions.registerSuccess(datas))
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login Screen' }],
            })
        }
    } catch (error) {
        yield put(actions.registerFailure(email))
    }
}
function* logout(payload) {
    const { navigation, token } = payload
    try {
        removeToken()
        yield call(getLogout, `${PATH}/member/logout`, { token })
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login Screen' }],
        })
    } catch (error) {
        yield put(actions.logoutFailure())
    }
}

//SEARCH
function* searchData(payload) {
    const { limit, search } = payload
    try {
        const data = yield call(load, `${PATH}/dlast/${limit}/${search.length > 0 ? search : 'undefined'}`);
        yield put(actions.searchDataSuccess(data));
    } catch (error) {
        yield put(actions.searchDataFailure());
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('SEARCH_DATA', searchData),
        takeEvery('LOAD_MENU', loadMenu),
        takeEvery('ADD_FIREBASE', addOrder),
        takeEvery('ADD_ORDER', addOrder),
        takeEvery('LOAD_ORDER', loadOrder),
        takeEvery('ADD_FAVORITE', addFavorite),
        takeEvery('DELETE_FAVORITE', deleteFavorite),
        takeEvery('LOAD_FAVORITE', loadFavorite),
        takeEvery('LOAD_MERCHANT', loadMerchant),
        takeEvery('LOGIN', login),
        takeEvery('REGISTER', register),
        takeEvery('LOGOUT', logout)
    ])
}


