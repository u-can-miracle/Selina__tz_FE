import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Router } from 'react-router-dom'

import history from './history'
import Routes from '../Routes'

const App = () => (
	<div className="app-wrapper">
		<Router
			history={history}
		>
			<Routes />
		</Router>
	</div>
)

export default hot(App)
