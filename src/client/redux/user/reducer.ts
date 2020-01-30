import {
	LOGIN_SUCCESS,
} from './actions'

const initialState = {
	isLogged: false,
}

export default function userReducer(
	state = initialState,
	action,
) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLogged: true,
			}

		default:
			return state
	}
}
