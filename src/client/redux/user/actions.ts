export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export function loginRequest(email, password){
	return {
		type: LOGIN_REQUEST,
		payload: {
			email,
			password,
		}
	}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export function loginSuccess(){
	return {
		type: LOGIN_SUCCESS,
	}
}
