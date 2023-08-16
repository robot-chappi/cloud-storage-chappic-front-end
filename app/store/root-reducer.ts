import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { api } from '@/app/store/api/api'
import { authSlice } from '@/app/store/auth/auth.slice'
import { filtersSlice } from '@/app/store/filters/filters.slice'
import { documentFiltersSlice } from '@/app/store/document-filters/document-filters.slice'
import { sidebarSlice } from '@/app/store/sidebar/sidebar.slice'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	filters: filtersSlice.reducer,
	documentFilters: documentFiltersSlice.reducer,
	sidebarReducer: sidebarSlice.reducer,
	toastr: toastrReducer,
})
