import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { hot } from 'react-hot-loader/root'
import { StaticRouter } from 'react-router-dom'

import Routes from '../../client/containers/Routes'

function renderReactAppHtml(url: string): string {
	const context = {}
	const reactApp = (
		<div className="app-wrapper">
			<StaticRouter location={url} context={context}>
				<Routes />
			</StaticRouter>
		</div>
	)
	const HotReactApp = hot(reactApp)

	return ReactDOMServer.renderToString(HotReactApp)
}

export default renderReactAppHtml
