import { useEffect } from 'react'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { useRouter } from 'next/router'
import { useActions } from '@/app/hooks/useActions'
import { usePathname, useSearchParams } from 'next/navigation'
import { IDocumentDataFilters } from '@/app/types/document.interface'

export const useDocumentExplorer = () => {
	const pathname = usePathname()
	const searchDocumentParams = useSearchParams()
	const { updateDocumentQueryParam, resetDocumentQueryParam } = useActions()
	const { replace } = useRouter()

	const { queryParams, isDocumentFilterUpdated } = useTypedSelector(
		(state) => state.documentFilters
	)

	useEffect(() => {
		resetDocumentQueryParam()
		if (searchDocumentParams)
			searchDocumentParams.forEach((value, key) => {
				updateDocumentQueryParam({
					key: key as keyof IDocumentDataFilters,
					value,
				})
			})
	}, [
		searchDocumentParams,
		updateDocumentQueryParam,
		pathname,
		resetDocumentQueryParam,
	])

	const updateDocumentQueryParams = (
		key: keyof IDocumentDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(
			searchDocumentParams ? searchDocumentParams.toString() : ''
		)

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)

		updateDocumentQueryParam({ key, value })
	}

	const resetDocumentFilters = () => {
		if (pathname) replace(pathname)
		resetDocumentQueryParam()
	}

	return {
		updateDocumentQueryParams,
		resetDocumentFilters,
		queryParams,
		isDocumentFilterUpdated,
	}
}
