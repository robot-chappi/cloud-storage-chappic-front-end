import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL, getUserUrl } from '@/app/configs/api.config'
import { IUser } from '@/app/types/user.interface'
import { TypeRootState } from '@/app/store/store'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Profile', 'Files', 'Documents'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken

			if (token) headers.set('Authorization', `Bearer ${token}`)

			return headers
		},
	}),
	endpoints: (builder) => ({
		getProfile: builder.query<IUser, any>({
			query: () => getUserUrl('/profile'),
			providesTags: () => [{ type: 'Profile' }],
		}),
		updateAvatar: builder.mutation<IUser, FormData>({
			query: (body) => ({
				url: getUserUrl('/avatar'),
				body,
				method: 'PATCH',
				credentials: 'include',
			}),
			invalidatesTags: () => [{ type: 'Profile' }],
		}),
	}),
})
