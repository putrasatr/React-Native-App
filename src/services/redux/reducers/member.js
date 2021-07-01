const member = (state = { data: [], msg: '' }, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                data: action.data
            }

        case 'LOGIN_FAILURE':
            return { ...state, msg: 'failed' }

        case 'REGISTER_SUCCESS':
            return {
                ...state,
                data: action.datas
            }

        case 'REGISTER_FAILURE':
            return { ...state, msg: action.msg}
        default:
            return state;
    }
}

export default member