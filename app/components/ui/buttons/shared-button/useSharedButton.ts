import { useMutation } from 'react-query'
import { errorCatch } from '@/app/utils/array/error-catch'
import { fileApi } from '@/app/store/api/file.api'
import { toastr } from 'react-redux-toastr'

export const useSharedButton = (originalName: string, isShared: boolean) => {
	const [share] = fileApi.useToggleSharedMutation()

	const { mutateAsync } = useMutation(
		'share file',
		(fileId: number) => share(fileId),
		{
			onSuccess: (response) => {
				toastr.success(
					'Success',
					`You have made the file ${originalName} ${
						isShared
							? 'private!'
							: 'public, now you can share a link to the file!'
					}`
				)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	return {
		mutateAsync,
	}
}
