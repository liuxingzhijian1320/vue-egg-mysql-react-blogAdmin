import { combineReducers } from 'redux'
import login from './login'
import menu from './menu'


const reducer = combineReducers({
	login,
	menu
})

export default reducer