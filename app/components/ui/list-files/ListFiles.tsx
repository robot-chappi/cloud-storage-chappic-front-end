import { FC } from 'react'
import FileActions from '@/app/components/ui/file/file-actions/FileActions'
import { IFileResponse } from '@/app/types/file.interface'
import FileList from '@/app/components/ui/file/file-list/FileList'
import { useListFiles } from '@/app/components/ui/list-files/useListFiles'
import Alert from '@/app/components/screens/alert/Alert'
import { IDocumentResponse } from '@/app/types/document.interface'

interface IListFiles {
	data?: IFileResponse | undefined
	documentData?: IDocumentResponse | undefined
	withActions?: boolean
	withActionsTitle?: string
	restoreAction?: boolean
	permanentAction?: boolean
	isExplorer?: boolean
	isFileDocument?: boolean
}

const ListFiles: FC<IListFiles> = ({
	data,
	documentData,
	withActions,
	withActionsTitle,
	restoreAction,
	permanentAction,
	isExplorer,
	isFileDocument,
}) => {
	const { values, actions } = useListFiles(permanentAction, isFileDocument)

	return data?.files?.length || documentData?.documents?.length ? (
		<>
			{(withActions || permanentAction) && (
				<FileActions
					title={withActionsTitle}
					onClickRemove={actions.onClickRemove}
					isActive={values.selectedIds.length > 0}
					isExplorer={isExplorer}
				/>
			)}
			{data?.files && (
				<FileList
					isFileDocument={isFileDocument}
					restoreAction={restoreAction}
					items={data.files}
					onFileSelect={actions.onFileSelect}
				/>
			)}
			{documentData?.documents && (
				<FileList
					isFileDocument={isFileDocument}
					restoreAction={restoreAction}
					documentItems={documentData.documents}
					onFileSelect={actions.onFileSelect}
				/>
			)}
		</>
	) : (
		<Alert
			title={isExplorer ? 'Information 🙃' : 'Oops... 🙁'}
			description={
				isExplorer
					? 'Start your search, just click on the filters above!'
					: 'The file list is empty!'
			}
			layoutTitle={'Waiting'}
			isPage={false}
		/>
	)
}

export default ListFiles
