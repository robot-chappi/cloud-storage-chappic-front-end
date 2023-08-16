import { FC } from 'react'
import { FileSelectType, IFile } from '@/app/types/file.interface'
import styles from './FileList.module.scss'
import Selecto from 'react-selecto'
import FileItem from '@/app/components/ui/file/file-item/FileItem'
import '@/app/styles/selecto.scss'
import { IDocument } from '@/app/types/document.interface'
import DocumentItem from '@/app/components/ui/document/document-item/DocumentItem'

interface IFileList {
	items?: IFile[]
	documentItems?: IDocument[]
	onFileSelect: (id: number, type: FileSelectType) => void
	restoreAction?: boolean
	isFileDocument?: boolean
}

const FileList: FC<IFileList> = ({
	items,
	documentItems,
	onFileSelect,
	restoreAction,
}) => {
	return (
		<div className={styles.wrapper}>
			{items &&
				items.map((item) => (
					<div data-id={item.id} key={item.id} className={'file'}>
						<FileItem restoreAction={restoreAction} file={item} />
					</div>
				))}

			{documentItems &&
				documentItems.map((item) => (
					<div data-id={item.id} key={item.id} className={'document'}>
						<DocumentItem restoreAction={restoreAction} documentItem={item} />
					</div>
				))}

			<Selecto
				// @ts-ignore
				container=".files"
				selectableTargets={['.file', '.document']}
				selectByClick
				hitRate={10}
				selectFromInside
				toggleContinueSelect={['shift']}
				continueSelect={false}
				onSelect={(e) => {
					e.added.forEach((el) => {
						el.classList.add('active')
						onFileSelect(Number(el.dataset['id']), 'select')
					})
					e.removed.forEach((el) => {
						el.classList.remove('active')
						onFileSelect(Number(el.dataset['id']), 'unselect')
					})
				}}
			/>
		</div>
	)
}

export default FileList
