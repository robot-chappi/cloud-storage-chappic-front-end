import { Middleware, MiddlewareAPI } from 'redux'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toastError } from '@/app/utils/array/error-catch'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			toastError(action.error, 'RTK error')
		}

		return next(action)
	}
