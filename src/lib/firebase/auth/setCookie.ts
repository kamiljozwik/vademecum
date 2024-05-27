/** Set cookies on the server to check auth status on the server as well */
export const setCookie = async (idToken: string) => {
	await fetch('/api/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ idToken })
	});
};
