const defaultState = {
	isLogin: false
}

// 纯函数
export default (state=defaultState, action) => {
	// console.info(action.type)
	switch (action.type){
		case 'LOGIN/LOGIN':
			if(action.account){
				return state({
					account: action.account,
					isLogin: true
				})
			}
			break
		case 'LOGIN/LOGOUT':
			return 	state.set('isLogin', false)
		default:	
			return state
	}
	
}