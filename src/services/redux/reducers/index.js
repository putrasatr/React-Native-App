import { combineReducers } from 'redux'

import menu from './menu'
import favorite from "./favorite";
import order from "./order"
import merchant from "./merchant"
import member from "./member"
import search from "./search"
import loading from "./loading"

export default combineReducers({
  menu,
  order,
  favorite,
  merchant,
  member,
  search,
  loading
})