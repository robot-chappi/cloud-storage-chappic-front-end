import { FC } from 'react'
import Meta from '@/app/utils/meta/Meta'
import { fileApi } from '@/app/store/api/file.api'
import { useAuth } from '@/app/hooks/useAuth'
import ListFiles from '@/app/components/ui/list-files/ListFiles'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import Pagination from '@/app/components/ui/explorer/pagination/Pagination'

const Photos: FC = () => {
	const { queryParams, updateQueryParams } = useExplorer()
	const { user } = useAuth()

	const { data, isLoading } = fileApi.useGetFilesQuery(
		{ ...queryParams, mimetype: 'image' },
		{
			skip: !user,
		}
	)

	if (isLoading) return null

	return (
		<Meta title={'Photos'}>
			<ListFiles data={data} withActions />
			{data?.files && data?.files.length !== 0 && queryParams.perPage && (
				<Pagination
					changePage={(page) => updateQueryParams('page', page.toString())}
					currentPage={Number(queryParams.page)}
					numberPages={Math.round(data.quantity / +queryParams.perPage)}
					quantityPage={data.quantity}
				/>
			)}
		</Meta>
	)
}

export default Photos
