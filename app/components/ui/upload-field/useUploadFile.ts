import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'
import { FileService } from '@/app/services/file/file.service'
import { errorCatch } from '@/app/utils/array/error-catch'
import { IFile } from '@/app/types/file.interface'
import { api } from '@/app/store/api/api'
import { toastr } from 'react-redux-toastr'

export const useUploadFile = (
	setFile?: (file: IFile) => void,
	setMultipleFiles?: (files: IFile[]) => void,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>,
	isAvatar: boolean = false,
	isMultiple: boolean = false
) => {
	const [updateAvatar] = api.useUpdateAvatarMutation()

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, setValue),
		{
			onSuccess: ({ data }) => {
				setFile && setFile(data)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	const { mutateAsync: mutateAsyncMultiple } = useMutation(
		'upload multiple files',
		(data: FormData) => FileService.uploadMultiple(data, setValue),
		{
			onSuccess: ({ data }) => {
				setMultipleFiles && setMultipleFiles(data)
			},
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	const { mutateAsync: mutateAsyncAvatar } = useMutation(
		'upload avatar',
		(data: FormData) => updateAvatar(data),
		{
			onError: (error: any) => {
				toastr.error('Error', errorCatch(error))
			},
		}
	)

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return

		setIsChosen && setIsChosen(true)

		const formData = new FormData()
		if (isMultiple) {
			for (let i = 0; i < files.length; i++) {
				formData.append('files', files[i])
			}
		} else {
			formData.append('file', files[0])
		}
		if (isAvatar) {
			await mutateAsyncAvatar(formData)
		} else if (isMultiple) {
			await mutateAsyncMultiple(formData)
		} else {
			await mutateAsync(formData)
		}
	}

	return {
		uploadFile,
	}
}
