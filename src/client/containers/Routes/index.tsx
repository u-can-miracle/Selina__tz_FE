import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../routes/Home'
import Location from '../../routes/Location'
import NotFound from '../../routes/NotFound'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Routes = () => (
	<>
		<Header />
		<div className="main-content container">
		<Switch>
			<Route
				path="/"
				exact
				component={Home}
			/>
			<Route
				path="/location/:id"
				exact
				component={Location}
			/>
			<Route component={NotFound} />
		</Switch>
		</div>
		<Footer/>
	</>
)

export default Routes
