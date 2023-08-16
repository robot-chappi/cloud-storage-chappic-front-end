import * as authActions from './auth/auth.actions'
import { filtersSlice } from '@/app/store/filters/filters.slice'
import { documentFiltersSlice } from '@/app/store/document-filters/document-filters.slice'
import { sidebarSlice } from '@/app/store/sidebar/sidebar.slice'

export const rootAction = {
	...authActions,
	...filtersSlice.actions,
	...documentFiltersSlice.actions,
	...sidebarSlice.actions,
}
