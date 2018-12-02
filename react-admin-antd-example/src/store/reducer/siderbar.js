const defaultState = {
	menuName: '首页',
	collapsed: false
}

export default (state=defaultState, action) => {
	// console.info(action.type)
	switch (action.type){
		case 'SWITCH_MENU':
			return {
					...state,
          menuName:action.value
			}
		case 'STATUS_MENU':
			return {
					...state,
          collapsed: !state.collapsed
			}
		default:	
			return state
	}
}