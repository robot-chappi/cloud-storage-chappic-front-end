import { useMutation } from 'react-query'
import { FileService } from '@/app/services/file/file.service'
import { errorCatch } from '@/app/utils/array/error-catch'
import { toastr } from 'react-redux-toastr'
import { DocumentService } from '@/app/services/document/document.service'
import { downloadFile } from '@/app/utils/object/downloadFile'

export const useDownloadButton = (filename: string) => {
	const { mutateAsync } = useMutation(
		'download file',
		(fileId: number) => FileService.download(fileId),
		{
			onSuccess: (response) => {
				downloadFile(response, filename)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	const { mutateAsync: mutateAsyncDocument } = useMutation(
		'download document',
		(fileId: number) => DocumentService.download(fileId),
		{
			onSuccess: (response) => {
				downloadFile(response, filename)
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
