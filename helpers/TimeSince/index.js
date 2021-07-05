import moment from 'moment'

export default function timeSince(date) {
    if (!date) return ''
    let arr = date.replace('at', '').split('/')
    let i = ([arr[0], arr[1]] = [arr[1], arr[0]])
    arr = arr.join('/')
    const time = Date.parse(arr)
    moment.locale('id')
    const start = moment(time)
    const end = moment(Date.now())
    return start.from(end, true)
}

