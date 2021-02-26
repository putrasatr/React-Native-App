const favorite = (state = { data: [], id: '' }, action) => {
    switch (action.type) {
        case 'LOAD_FAVORITE_SUCCESS':
            return {
                ...state,
                data: action.data.data.filter((item) => {
                    return item.favorite !== 'null' 
                })
            }

        case 'LOAD_FAVORITE_FAILURE':
            return state;

        case 'ADD_FAVORITE_SUCCESS':
            return {
                ...state,
                id: action.id
            }

        case 'ADD_FAVORITE_FAILURE':
            return state;

        case 'DELETE_FAVORITE_SUCCESS':
            return {
                data: []
            }
        case 'DELETE_FAVORITE_FAILURE':
            return state;

        default:
            return state;
    }
}

export default favorite