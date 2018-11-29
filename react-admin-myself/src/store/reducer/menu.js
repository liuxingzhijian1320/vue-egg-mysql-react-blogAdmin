const defaultState = {
	collapsed: false
}

// 纯函数
export default (state=defaultState, action) => {
	// console.info(action.type, state)
	switch (action.type){
		case 'MEUN/STATUS':
			return 	{
				collapsed: !state.collapsed
			}
		default:	
			return state
	}
	
}