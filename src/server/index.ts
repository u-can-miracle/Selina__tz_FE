import * as express from 'express'

import envs from './envs'
import expressConfig from './config'
import renderPageHtml from './renderPageHtml'

const { serverPort } = envs

const app = express()

expressConfig(app)

app.get(
	[
		'/dashboard/confirm/:hash',
		'/dashboard/set-password/:newPassword',
		/^(?:(?!(_|\.)).)*$/,
	],
	async (req, res) => {
		console.log('123123123')
		const pageHtml = await renderPageHtml(req)

		res.send(pageHtml)
	}
)

app.listen(serverPort, () => {
	// tslint:disable-next-line
	console.log('dev1.server starts')
})
