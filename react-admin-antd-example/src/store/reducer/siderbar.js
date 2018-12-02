const defaultState = {
	menuName: '首页',
}

export default (state=defaultState, action) => {
	// console.info(action.type)
	switch (action.type){
		case 'SWITCH_MENU':
			return {
					...state,
          menuName:action.value
			}
		default:	
			return state
	}
}