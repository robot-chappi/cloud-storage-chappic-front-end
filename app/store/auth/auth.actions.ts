import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthUrl } from '@/app/configs/api.config'
import { AuthService } from '@/app/services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '@/app/utils/array/error-catch'
import { IAuthData } from '@/app/services/auth/auth.helper'

export const register = createAsyncThunk<
	IAuthData,
	{ email: string; fullname: string; password: string }
>(getAuthUrl('/register'), async ({ email, fullname, password }, thunkAPI) => {
	try {
		const response = await AuthService.register(email, fullname, password)
		toastr.success('Registration', 'The action is successful!')
		return response
	} catch (e) {
		toastError(e)
		return thunkAPI.rejectWithValue(e)
	}
})

export const login = createAsyncThunk<
	IAuthData,
	{ email: string; fullname: string; password: string }
>(getAuthUrl('/login'), async ({ email, fullname, password }, thunkAPI) => {
	try {
		const response = await AuthService.login(email, fullname, password)
		toastr.success('Login', 'The action is successful!')
		return response
	} catch (e) {
		toastError(e)
		return thunkAPI.rejectWithValue(e)
	}
})

export const logout = createAsyncThunk(getAuthUrl('/logout'), async () => {
	return {}
})
