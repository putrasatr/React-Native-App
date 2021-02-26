//--------------SEARCH DATA-------------------
export const searchDataSuccess = (data) => ({
    type: 'SEARCH_DATA_SUCCESS',
    data
})

export const searchDataFailure = (msg) => ({
    type: 'SEARCH_DATA_FAILURE',
    msg
})

export const searchData = (limit,search) => ({
    type: 'SEARCH_DATA',
    limit,
    search
})
//-------------------------------------------

//--------------LOAD MENU-------------------
export const loadMenuSuccess = (data) => ({
    type: 'LOAD_MENU_SUCCESS',
    data
})

export const loadMenuFailure = () => ({
    type: 'LOAD_MENU_FAILURE'
})

export const loadMenu = (limit) => ({
    type: "LOAD_MENU",
    limit
})
//-------------------------------------------


//---------------ADD ORDER-------------------
export const addOrderSuccess = (data) => ({
    type: 'ADD_ORDER_SUCCESS',
    data
})

export const addOrderFailure = () => ({
    type: 'ADD_ORDER_FAILURE'
})
// export const addFirebase = (token)=>({
//     type:"ADD_FIREBASE",
//     token
// })
export const addOrder = (id_invoices, id_iklan, id_member, id_merchant, jlh_pesanan, status,token) => (
    {
        type: "ADD_ORDER",
        id_invoices,
        id_iklan,
        id_member,
        id_merchant,
        jlh_item: jlh_pesanan,
        deskripsi: 'none',
        status,
        token
    })
//-------------------------------------------


//--------------LOAD ORDER-------------------
export const loadOrderSuccess = (data) => ({
    type: 'LOAD_ORDER_SUCCESS',
    data
})

export const loadOrderFailure = () => ({
    type: 'LOAD_ORDER_FAILURE'
})

export const loadOrder = (id) => ({
    type: "LOAD_ORDER",
    id
})
//-------------------------------------------

//---------------ADD FAVORITE-------------------
export const addFavoriteSuccess = (id) => ({
    type: 'ADD_FAVORITE_SUCCESS',
    id
})

export const addFavoriteFailure = () => ({
    type: 'ADD_FAVORITE_FAILURE'
})

export const addFavorite = (id_iklan, id_makanan, id_member, id_merchant) => (
    {
        type: "ADD_FAVORITE",
        id_iklan,
        id_makanan,
        id_member,
        id_merchant
    })
//-------------------------------------------

//---------------DELETE ORDER-------------------
export const deleteFavoriteSuccess = (data) => ({
    type: 'DELETE_FAVORITE_SUCCESS',
    data
})

export const deleteFavoriteFailure = () => ({
    type: 'DELETE_FAVORITE_FAILURE'
})

export const deleteFavorite = (id) => (
    {
        type: "DELETE_FAVORITE",
        id
    })
//-------------------------------------------

//--------------LOAD FAVORITE-------------------
export const loadFavoriteSuccess = (data) => ({
    type: 'LOAD_FAVORITE_SUCCESS',
    data
})

export const loadFavoriteFailure = () => ({
    type: 'LOAD_FAVORITE_FAILURE'
})

export const loadFavorite = (id) => ({
    type: "LOAD_FAVORITE",
    id
})
//-------------------------------------------

//--------------LOAD MERCHANT-------------------
export const loadMerchantSuccess = (data) => ({
    type: 'LOAD_MERCHANT_SUCCESS',
    data
})

export const loadMerchantFailure = () => ({
    type: 'LOAD_MERCHANT_FAILURE'
})

export const loadMerchant = (id) => ({
    type: "LOAD_MERCHANT",
    id
})
//-------------------------------------------

//--------------LOAD MERCHANT DETAIL-------------------
export const loadMerchantDetailSuccess = (data) => ({
    type: 'LOAD_MERCHANT_DETAIL_SUCCESS',
    data
})

export const loadMerchantDetailFailure = () => ({
    type: 'LOAD_MERCHANT_DETAIL_FAILURE'
})

export const loadMerchantDetail = () => ({
    type: "LOAD_MERCHANT_DETAIL"
})
//-------------------------------------------


//--------------LOGIN MEMBER-------------------
export const loginSuccess = (data) => ({
    type: 'LOGIN_SUCCESS',
    data
})

export const loginFailure = (msg) => ({
    type: 'LOGIN_FAILURE',
    msg
})

export const login = (email, password, navigation) => ({
    type: "LOGIN",
    email, password, navigation
})
//-------------------------------------------

//--------------REGISTER MEMBER-------------------
export const registerSuccess = (datas) => ({
    type: 'REGISTER_SUCCESS',
    datas
})

export const registerFailure = (msg) => ({
    type: 'REGISTER_FAILURE',
    msg
})

export const register = (email, password, repassword,navigation,username) => ({
    type: "REGISTER",
    email, password,repassword, navigation,username
})
//-------------------------------------------


//--------------LOGIN MEMBER-------------------
export const logoutSuccess = (data) => ({
    type: 'LOGOUT_SUCCESS',
    data
})

export const logoutFailure = (msg) => ({
    type: 'LOGOUT_FAILURE',
    msg
})

export const logout = (navigation,token) => ({
    type: "LOGOUT",
    navigation,token
})
//-------------------------------------------