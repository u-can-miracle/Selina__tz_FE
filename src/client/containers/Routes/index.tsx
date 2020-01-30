import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../routes/Home'
import NotFound from '../../routes/NotFound'

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route component={NotFound} />
	</Switch>
)

export default Routes
