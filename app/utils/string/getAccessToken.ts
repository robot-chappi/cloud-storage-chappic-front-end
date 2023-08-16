export const getAccessToken = () => {
	const storage = localStorage.getItem('persist:root')
	if (storage) {
		const parsedStorage = JSON.parse(storage)
		return JSON.parse(parsedStorage.auth).accessToken
	}
	return ''
}
