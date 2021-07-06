const initialState = {
    isLoading: false
}

const loading = (state = initialState, action) => {
    const { isLoading, type } = action
    switch (type) {
        case "ISLOADING":

            return {
                ...state,
                isLoading
            }

        default:
            return state
    }
}

export default loading