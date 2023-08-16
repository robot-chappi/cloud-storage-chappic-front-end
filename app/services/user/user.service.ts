import { instance } from '@/app/api/axios'
import { IAuthData } from '@/app/services/auth/auth.helper'
import { getUserUrl } from '@/app/configs/api.config'

export const UserService = {
	async getProfile() {
		return await instance.get<IAuthData>(getUserUrl('/profile'))
	},
}
