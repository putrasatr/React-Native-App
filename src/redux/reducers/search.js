const search = (state = { merchant: [], menu: [] }, action) => {
    switch (action.type) {

        case 'SEARCH_DATA_SUCCESS':
            return {
                ...state,
                merchant: action.data.merchant.map((item) => {
                    return item
                }),
                menu: action.data.menu.map((item) => {
                    return item
                })
            }

        case 'SEARCH_DATA_FAILURE':
            return state;


        default:
            return state;
    }
}

export default search


