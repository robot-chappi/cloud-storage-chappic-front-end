import { createSlice } from '@reduxjs/toolkit'
import { ISidebarInitialState } from '@/app/store/sidebar/sidebar.types'

const initialState: ISidebarInitialState = {
	isDocument: false,
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isDocument = !state.isDocument
		},
		resetSidebar: (state) => {
			state.isDocument = false
		},
	},
})
