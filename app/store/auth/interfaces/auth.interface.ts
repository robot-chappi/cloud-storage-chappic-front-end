import { IAuthData } from '@/app/services/auth/auth.helper'

export interface IAuthInitialState extends IAuthData {
	isLoading: boolean
}
