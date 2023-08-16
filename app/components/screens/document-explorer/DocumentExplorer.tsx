import { FC, useState } from 'react'
import Meta from '@/app/utils/meta/Meta'
import Heading from '@/app/components/ui/heading/Heading'
import styles from '../explorer/Explorer.module.scss'
import SortDropdown from '@/app/components/ui/explorer/sort/SortDropdown'
import Button from '@/app/components/ui/buttons/button/Button'
import cn from 'classnames'
import Filters from '@/app/components/ui/explorer/filters/Filters'
import Pagination from '@/app/components/ui/explorer/pagination/Pagination'
import { IoClose, IoList } from 'react-icons/io5'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'
import { documentApi } from '@/app/store/api/document.api'
import ListFiles from '@/app/components/ui/list-files/ListFiles'

const DocumentExplorer: FC = () => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

	const {
		isDocumentFilterUpdated,
		queryParams,
		updateDocumentQueryParams,
		resetDocumentFilters,
	} = useDocumentExplorer()

	const { data } = documentApi.useGetDocumentsQuery(queryParams, {
		skip: !isDocumentFilterUpdated,
	})

	return (
		<Meta title={'Document explorer'}>
			<div className={styles.wrapper_heading}>
				<Heading
					title={
						queryParams.searchTerm
							? `Search by query "${queryParams.searchTerm}"`
							: 'Document Explorer'
					}
				/>
				<SortDropdown isDocumentFilter />
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
				<Filters isDocumentFilter resetFilters={resetDocumentFilters} />
			</div>
			<div>
				<ListFiles
					isFileDocument
					isExplorer={true}
					documentData={data}
					withActions
				/>
				{data?.documents &&
					data?.documents.length !== 0 &&
					queryParams.perPage && (
						<Pagination
							changePage={(page) =>
								updateDocumentQueryParams('page', page.toString())
							}
							currentPage={Number(queryParams.page)}
							numberPages={Math.round(data.quantity / +queryParams.perPage)}
							quantityPage={data.quantity}
						/>
					)}
			</div>
		</Meta>
	)
}

export default DocumentExplorer
