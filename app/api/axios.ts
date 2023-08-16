import axios from 'axios'
import { IS_PRODUCTION } from '@/app/configs/constants'
import { API_SERVER_URL, API_URL } from '@/app/configs/api.config'
import { errorCatch, getContentType } from '@/app/utils/array/error-catch'
import { getAccessToken } from '@/app/utils/string/getAccessToken'

export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const token = getAccessToken()

	if (config.headers && token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			return localStorage.removeItem('persist:root')
		}

		throw error
	}
)

export default instance
