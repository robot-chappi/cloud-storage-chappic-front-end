import { FC } from 'react'
import Meta from '@/app/utils/meta/Meta'
import { useAuth } from '@/app/hooks/useAuth'
import ListFiles from '@/app/components/ui/list-files/ListFiles'
import Pagination from '@/app/components/ui/explorer/pagination/Pagination'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'
import { documentApi } from '@/app/store/api/document.api'

const Editable: FC = () => {
	const { queryParams, updateDocumentQueryParams } = useDocumentExplorer()

	const { user } = useAuth()

	const { data, isLoading } = documentApi.useGetDocumentsQuery(
		{ ...queryParams, isEditable: 'true' },
		{
			skip: !user,
		}
	)

	if (isLoading) return null

	return (
		<Meta title={'Editable'}>
			<ListFiles isFileDocument documentData={data} withActions />
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
		</Meta>
	)
}

export default Editable
