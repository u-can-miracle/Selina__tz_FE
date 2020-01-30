import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { hot } from 'react-hot-loader/root'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../client/containers/Routes'
import getSingletoneStore from '../../client/redux/store/get.singletone.store'

let store

function renderReactAppHtml(url: string): string {
	if (!store) {
		store = getSingletoneStore()
	}

	const context = {}
	const reactApp = (
		<div className="app-wrapper">
			<Provider store={store}>
				<StaticRouter location={url} context={context}>
					<Routes />
				</StaticRouter>
			</Provider>
		</div>
	)
	const HotReactApp = hot(reactApp)

	return ReactDOMServer.renderToString(HotReactApp)
}

export default renderReactAppHtml
