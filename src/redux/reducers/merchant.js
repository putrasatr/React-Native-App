const merchant = (state = { restaurant: [], bakery: [], merchant: [], meenu: [] }, action) => {
    switch (action.type) {
        case 'LOAD_MERCHANT_SUCCESS':
            if (action.data.data) {
                return {
                    ...state,
                    restaurant: action.data.data.filter((item) => {
                        return item.kategori == 1
                    }),
                    bakery: action.data.data.filter((item) => {
                        return item.kategori == 2
                    })
                }
            }
            return {
                ...state,
                merchant: action.data.merchant.map((item, index) => {
                    return item
                }),
                menu: action.data.menu.map((item, index) => {
                    return item
                })
            }
        case 'LOAD_MERCHANT_FAILURE':
            return state

        default:
            return state;
    }
}

export default merchant