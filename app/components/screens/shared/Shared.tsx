import { FC } from 'react'
import Meta from '@/app/utils/meta/Meta'
import { fileApi } from '@/app/store/api/file.api'
import { useAuth } from '@/app/hooks/useAuth'
import ListFiles from '@/app/components/ui/list-files/ListFiles'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import Pagination from '@/app/components/ui/explorer/pagination/Pagination'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'
import { documentApi } from '@/app/store/api/document.api'

const Shared: FC<{ isDocument?: boolean }> = ({ isDocument }) => {
	const { queryParams, updateQueryParams } = useExplorer()

	const { queryParams: queryDocumentParams, updateDocumentQueryParams } =
		useDocumentExplorer()

	const { user } = useAuth()

	const { data, isLoading } = fileApi.useGetFilesQuery(
		{ ...queryParams, isShared: 'true' },
		{
			skip: !user || isDocument,
		}
	)

	const { data: documentData, isLoading: isDocumentLoading } =
		documentApi.useGetDocumentsQuery(
			{ ...queryDocumentParams, isShared: 'true' },
			{
				skip: !user || !isDocument,
			}
		)

	if ((isLoading && !isDocument) || (isDocumentLoading && isDocument))
		return null
	return (
		<Meta title={'Shared'}>
			{isDocument ? (
				<ListFiles isFileDocument documentData={documentData} withActions />
			) : (
				<ListFiles data={data} withActions />
			)}
			{data?.files && data?.files.length !== 0 && queryParams.perPage && (
				<Pagination
					changePage={(page) => updateQueryParams('page', page.toString())}
					currentPage={Number(queryParams.page)}
					numberPages={Math.round(data.quantity / +queryParams.perPage)}
					quantityPage={data.quantity}
				/>
			)}
			{documentData?.documents &&
				documentData?.documents.length !== 0 &&
				queryDocumentParams.perPage && (
					<Pagination
						changePage={(page) =>
							updateDocumentQueryParams('page', page.toString())
						}
						currentPage={Number(queryDocumentParams.page)}
						numberPages={Math.round(
							documentData.quantity / +queryDocumentParams.perPage
						)}
						quantityPage={documentData.quantity}
					/>
				)}
		</Meta>
	)
}

export default Shared
