import { useMutation } from 'react-query'
import { errorCatch } from '@/app/utils/array/error-catch'
import { fileApi } from '@/app/store/api/file.api'
import { toastr } from 'react-redux-toastr'
import { documentApi } from '@/app/store/api/document.api'

export const useRestoreButton = (originalName: string) => {
	const [restore] = fileApi.useRestoreFileMutation()
	const [restoreDocument] = documentApi.useRestoreDocumentMutation()

	const { mutateAsync } = useMutation(
		'restore file',
		(fileId: number) => restore(fileId),
		{
			onSuccess: (response) => {
				toastr.success('Success', `You have restored file: ${originalName}!`)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	const { mutateAsync: mutateAsyncDocument } = useMutation(
		'restore document',
		(fileId: number) => restoreDocument(fileId),
		{
			onSuccess: (response) => {
				toastr.success(
					'Success',
					`You have restored document: ${originalName}!`
				)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	return {
		mutateAsync,
		mutateAsyncDocument,
	}
}
