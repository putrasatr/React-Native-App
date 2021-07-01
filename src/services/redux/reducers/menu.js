import moment from 'moment-timezone'

const menu = (state = [], action) => {
    switch (action.type) {


        case 'LOAD_MENU_SUCCESS':

            const set = action.data.data.filter((item) => {
                const endDate = moment(item.endDate).format('HHmm ');
                const Now = moment(Date.now()).format('HHmm ');
                return item.jlhItems - item.terjual > 0 && endDate > Now
            })
            return set

        case 'LOAD_MENU_FAILURE':
            return state;

        default:
            return state;
    }
}

export default menu


