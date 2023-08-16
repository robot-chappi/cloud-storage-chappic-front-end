import { FC, useState } from 'react'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import Meta from '@/app/utils/meta/Meta'
import Heading from '@/app/components/ui/heading/Heading'
import styles from './Explorer.module.scss'
import SortDropdown from '@/app/components/ui/explorer/sort/SortDropdown'
import Button from '@/app/components/ui/buttons/button/Button'
import cn from 'classnames'
import Filters from '@/app/components/ui/explorer/filters/Filters'
import ListFiles from '@/app/components/ui/list-files/ListFiles'
import { fileApi } from '@/app/store/api/file.api'
import Pagination from '@/app/components/ui/explorer/pagination/Pagination'
import { IoClose, IoList } from 'react-icons/io5'

const Explorer: FC = () => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

	const { isFilterUpdated, queryParams, updateQueryParams, resetFilters } =
		useExplorer()

	const { data } = fileApi.useGetFilesQuery(queryParams, {
		skip: !isFilterUpdated,
	})

	return (
		<Meta title={'Explorer'}>
			<div className={styles.wrapper_heading}>
				<Heading
					title={
						queryParams.searchTerm
							? `Search by query "${queryParams.searchTerm}"`
							: 'Explorer'
					}
				/>
				<SortDropdown />
			</div>
			<Button
				onClick={() => setIsFilterOpen(!isFilterOpen)}
				className="mb-7 ml-7"
			>
				{isFilterOpen ? <IoClose /> : <IoList />}
			</Button>
			<div
				className={cn(styles.explorer, {
					[styles.filterOpened]: isFilterOpen,
				})}
			>
				<Filters resetFilters={resetFilters} />
			</div>
			<div>
				<ListFiles isExplorer={true} data={data} withActions />
				{data?.files && data?.files.length !== 0 && queryParams.perPage && (
					<Pagination
						changePage={(page) => updateQueryParams('page', page.toString())}
						currentPage={Number(queryParams.page)}
						numberPages={Math.round(data.quantity / +queryParams.perPage)}
						quantityPage={data.quantity}
					/>
				)}
			</div>
		</Meta>
	)
}

export default Explorer
