import { FC } from 'react'
import { EnumFileSort } from '@/app/types/file.interface'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import { SORT_SELECT_DATA } from '@/app/components/ui/explorer/sort/sort-select.data'
import Select from '@/app/components/ui/select/Select'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'
import { ISelectItem } from '@/app/components/ui/select/interfaces/select.interface'

const SortDropdown: FC<{ isDocumentFilter?: boolean }> = ({
	isDocumentFilter,
}) => {
	const { queryParams, updateQueryParams } = useExplorer()
	const { queryParams: queryDocumentParams, updateDocumentQueryParams } =
		useDocumentExplorer()

	const handleSortDropdownClick = (value: ISelectItem<EnumFileSort>) => {
		if (isDocumentFilter) {
			updateDocumentQueryParams('sort', value.key.toString())
		} else {
			updateQueryParams('sort', value.key.toString())
		}
	}

	return (
		<div className="z-10">
			<Select<EnumFileSort>
				data={SORT_SELECT_DATA}
				onChange={(value) => handleSortDropdownClick(value)}
				value={
					isDocumentFilter
						? SORT_SELECT_DATA.find(
								(value) => value.key === queryDocumentParams.sort
						  )
						: SORT_SELECT_DATA.find((value) => value.key === queryParams.sort)
				}
				title="Sort by"
			/>
		</div>
	)
}

export default SortDropdown
