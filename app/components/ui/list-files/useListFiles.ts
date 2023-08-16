import { useState } from 'react'
import { FileSelectType } from '@/app/types/file.interface'
import { fileApi } from '@/app/store/api/file.api'
import { documentApi } from '@/app/store/api/document.api'

export const useListFiles = (
	permanentAction?: boolean,
	isFileDocument?: boolean
) => {
	const [selectedIds, setSelectedIds] = useState<number[]>([])

	const [removeFiles] = fileApi.useDeleteFileMutation()
	const [permanentRemoveFiles] = fileApi.useDeletePermanentFileMutation()

	const [removeDocuments] = documentApi.useDeleteDocumentMutation()
	const [permanentRemoveDocuments] =
		documentApi.useDeletePermanentDocumentMutation()

	const onFileSelect = (id: number, type: FileSelectType) => {
		if (type === 'select') {
			setSelectedIds((prevState) => [...prevState, id])
		} else {
			setSelectedIds((prevState) => prevState.filter((_id) => _id !== id))
		}
	}

	const onClickRemove = () => {
		setSelectedIds([])
		if (selectedIds.length) {
			if (isFileDocument) {
				permanentAction
					? permanentRemoveDocuments(selectedIds)
					: removeDocuments(selectedIds)
			} else {
				permanentAction
					? permanentRemoveFiles(selectedIds)
					: removeFiles(selectedIds)
			}
		}
	}

	return {
		values: {
			selectedIds,
		},
		actions: {
			onFileSelect,
			onClickRemove,
		},
	}
}
