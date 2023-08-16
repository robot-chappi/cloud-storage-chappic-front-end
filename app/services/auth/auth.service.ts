import { axiosClassic } from '@/app/api/axios'
import { IAuthData } from '@/app/services/auth/auth.helper'
import { getAuthUrl } from '@/app/configs/api.config'

export const AuthService = {
	async login(email: string, fullname: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(getAuthUrl('/login'), {
			email,
			fullname,
			password,
		})

		return response.data
	},

	async register(email: string, fullname: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(
			getAuthUrl('/register'),
			{
				email,
				fullname,
				password,
			}
		)

		return response.data
	},
}
