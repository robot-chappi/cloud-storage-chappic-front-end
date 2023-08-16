import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IDocumentFiltersActionsPayload,
	IDocumentFiltersState,
} from './document-filters.types'
import { EnumFileSort } from '@/app/types/file.interface'

const initialState: IDocumentFiltersState = {
	isDocumentFilterUpdated: false,
	queryParams: {
		sort: EnumFileSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: 20,
		isDeleted: '',
		isShared: '',
		isEditable: '',
	},
}

export const documentFiltersSlice = createSlice({
	name: 'document-filters',
	initialState,
	reducers: {
		updateDocumentQueryParam: (
			state,
			action: PayloadAction<IDocumentFiltersActionsPayload>
		) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isDocumentFilterUpdated = true
		},

		resetDocumentQueryParam: (state) => {
			state.queryParams = initialState.queryParams
		},

		resetDocumentFilterUpdate: (state) => {
			state.isDocumentFilterUpdated = false
		},
	},
})
