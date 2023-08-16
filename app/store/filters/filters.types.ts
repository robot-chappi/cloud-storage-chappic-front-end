import { IFileDataFilters } from '@/app/types/file.interface'

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: IFileDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof IFileDataFilters
	value: string
}
