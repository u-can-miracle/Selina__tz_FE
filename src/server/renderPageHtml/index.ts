import renderReactAppHtml from './renderReactAppHtml'

async function renderPageHtml(req): Promise<string> {
	const reactAppHtml = renderReactAppHtml(req.url)

	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title>Document</title>
		<link
			rel="stylesheet"
			type="text/css"
			charset="UTF-8"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
		/>
		<link
			rel="stylesheet"
			type="text/css"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
		/>
		<link rel="stylesheet" href="/style.css">
	</head>
	<body>
	  <div id="root">${reactAppHtml}</div>
	  <script src="/bundle.js"></script>
	</body>
	</html>
	`
}

export default renderPageHtml
