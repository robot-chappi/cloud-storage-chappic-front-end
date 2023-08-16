import { IDocumentDataFilters } from '@/app/types/document.interface'

export interface IDocumentFiltersState {
	isDocumentFilterUpdated: boolean
	queryParams: IDocumentDataFilters
}

export interface IDocumentFiltersActionsPayload {
	key: keyof IDocumentDataFilters
	value: string
}
