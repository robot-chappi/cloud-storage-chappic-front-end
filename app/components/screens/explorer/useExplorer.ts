import { useEffect } from 'react'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { useRouter } from 'next/router'
import { useActions } from '@/app/hooks/useActions'
import { usePathname, useSearchParams } from 'next/navigation'
import { IFileDataFilters } from '@/app/types/file.interface'

export const useExplorer = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam, resetQueryParam } = useActions()
	const { replace } = useRouter()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		(state) => state.filters
	)

	useEffect(() => {
		resetQueryParam()
		if (searchParams)
			searchParams.forEach((value, key) => {
				updateQueryParam({ key: key as keyof IFileDataFilters, value })
			})
	}, [searchParams, updateQueryParam, pathname, resetQueryParam])

	const updateQueryParams = (key: keyof IFileDataFilters, value: string) => {
		const newParams = new URLSearchParams(
			searchParams ? searchParams.toString() : ''
		)

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)

		updateQueryParam({ key, value })
	}

	const resetFilters = () => {
		if (pathname) replace(pathname)
		resetQueryParam()
	}

	return {
		updateQueryParams,
		resetFilters,
		queryParams,
		isFilterUpdated,
	}
}
