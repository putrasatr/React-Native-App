const order = (state = [], action) => {
    switch (action.type) {

        case 'LOAD_ORDER_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                item.isBtnSave = false;
                return item
            })

        case 'LOAD_ORDER_FAILURE':
            return state;

        case 'ADD_ORDER_SUCCESS':
            return state

        case 'ADD_ORDER_FAILURE':
            return state;
            
        default:
            return state;
    }
}

export default order


