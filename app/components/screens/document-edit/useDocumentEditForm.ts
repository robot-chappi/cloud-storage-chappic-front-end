import { SubmitHandler, useForm } from 'react-hook-form'
import {
	IDocumentDto,
	IDocumentPublicDto,
} from '@/app/types/document.interface'
import { documentApi } from '@/app/store/api/document.api'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getKeys } from '@/app/utils/object/getKeys'
import { toastError } from '@/app/utils/array/error-catch'
import { getPublicDocument } from '@/app/configs/api.config'
import { getDocumentLink } from '@/app/configs/app.config'

export const useDocumentEditForm = (isEditable?: boolean) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue,
	} = useForm<IDocumentDto>({ mode: 'onChange' })

	const { push, query } = useRouter()

	const documentId = !isEditable ? String(query.id) : ''
	const documentSecurePath = isEditable ? String(query.securepath) : ''

	const [updateDocument] = documentApi.useUpdateDocumentMutation()
	const [updateDocumentPublic] = documentApi.useUpdateDocumentPublicMutation()
	const [saveDocument] = documentApi.useSaveFileDocumentMutation()
	const [trigger] = documentApi.useLazyGetDocumentQuery()
	const [triggerEditable] = documentApi.useLazyGetEditableBySecurePathQuery()

	const { isLoading } = useQuery(
		['document', documentId],
		() => trigger(Number(documentId)),
		{
			onSuccess: ({ data }) => {
				if (data) {
					getKeys(data).forEach((key) => {
						// @ts-ignore
						setValue(key, data[key as IDocumentDto])
					})
				}
			},
			onError(error) {
				toastError(error, 'Get document')
			},
			enabled: !!query.id && !isEditable,
		}
	)

	const { isLoading: isLoadingPublic } = useQuery(
		['document', documentId],
		() => triggerEditable(documentSecurePath),
		{
			onSuccess: ({ data }) => {
				if (data) {
					getKeys(data).forEach((key) => {
						// @ts-ignore
						setValue(key, data[key])
					})
				}
			},
			onError(error) {
				toastError(error, 'Get public document')
			},
			enabled: !!query.securepath && isEditable,
		}
	)

	const onSubmit: SubmitHandler<IDocumentDto | IDocumentPublicDto> = (data) => {
		if (isEditable) {
			updateDocumentPublic({ ...data, securePath: documentSecurePath })
				.unwrap()
				.then(() => {
					return push(getPublicDocument(documentSecurePath))
				})
		} else {
			updateDocument({ ...data, id: Number(documentId) })
				.unwrap()
				.then(() => {
					return push(getDocumentLink(`document/${documentId}`))
				})
		}
	}

	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			onSubmit,
		},
		status: {
			isLoading,
			isLoadingPublic,
		},
		actions: {
			saveDocument,
		},
		values: {
			documentId,
		},
	}
}
