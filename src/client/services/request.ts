export default function request({
	apiUrl,
	method = 'GET',
	headers = {}
}) {
	return fetch(apiUrl, {
		method,
		...headers,
	})
	.then(res => res.json())
}
