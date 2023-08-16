import { ChangeEvent, useState } from 'react'

import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'

export const useSearch = (isDocumentFilter?: boolean) => {
	const { queryParams, updateQueryParams } = useExplorer()
	const { queryParams: queryDocumentParams, updateDocumentQueryParams } =
		useDocumentExplorer()
	const [searchTerm, setSearchTerm] = useState<string>(
		isDocumentFilter
			? queryDocumentParams.searchTerm || ''
			: queryParams.searchTerm || ''
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClick = () => {
		if (isDocumentFilter) {
			updateDocumentQueryParams('searchTerm', searchTerm)
		} else {
			updateQueryParams('searchTerm', searchTerm)
		}
	}

	return {
		handleSearch,
		searchTerm,
		handleClick,
	}
}
