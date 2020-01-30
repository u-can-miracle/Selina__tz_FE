import { put, takeEvery } from 'redux-saga/effects'
import {
	LOGIN_REQUEST,
	loginSuccess,
} from './actions'

import history from '../../containers/App/history'

const apiLogin = '/login'
export function* sendLoginRequest(action){
	try {
		const { data: response } = yield request(apiLogin, action.payload)
		const { isOk } = response

		if(isOk){
			yield put(loginSuccess())
			history.push('/main')
		} else {
			if(isNotVerified){
				// show error
			} else {
				// show error
			}
		}
	} catch (err) {
		// show error
	}
}
export function* watchLogin(){
	yield takeEvery(LOGIN_REQUEST, sendLoginRequest)
}
