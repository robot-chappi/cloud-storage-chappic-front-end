import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFiltersActionsPayload, IFiltersState } from './filters.types'
import { EnumFileSort } from '@/app/types/file.interface'

const initialState: IFiltersState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumFileSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: 20,
		isDeleted: '',
		isShared: '',
		mimetype: '',
	},
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (
			state,
			action: PayloadAction<IFiltersActionsPayload>
		) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},

		resetQueryParam: (state) => {
			state.queryParams = initialState.queryParams
		},

		resetFilterUpdate: (state) => {
			state.isFilterUpdated = false
		},
	},
})
