import renderReactAppHtml from './renderReactAppHtml'
// import getPreloadedState from '../utils/getPreloadedState'

async function renderPageHtml(
	req,
): Promise<string> {
	// const preloadedState = await getPreloadedState(
	// 	req.headers,
	// 	hash,
	// 	newPassword,
	// 	req.originalUrl,
	// )
	const reactAppHtml = renderReactAppHtml(req.url)

	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title>Document</title>
		<link rel="stylesheet" href="/style.css">
	</head>
	<body>
	  <div id="root">${reactAppHtml}</div>
	  <script src="/bundle.js"></script>
	</body>
	</html>
	`
}

// <script>window.__INITIAL_STATE__= ${JSON.stringify(preloadedState)}</script>

export default renderPageHtml
