import { FC } from 'react'

import parse from 'html-react-parser'
import styles from './DocumentInformation.module.scss'
import { formatFileSizeAuto } from '@/app/utils/string/formatFileSize'
import { IUser } from '@/app/types/user.interface'
import { IDocument } from '@/app/types/document.interface'
import { IoMdDocument } from 'react-icons/io'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface IDocumentInformation
	extends Omit<IDocument, 'id' | 'user' | 'securePath' | 'deletedAt' | 'path'> {
	user?: IUser
}

const DocumentInformation: FC<IDocumentInformation> = ({
	user,
	filename,
	isEditable,
	isShared,
	createdAt,
	updatedAt,
	size,
	content,
}) => {
	return (
		<div className={styles.info}>
			{!filename ? (
				<div className={styles.file}>Document is loading...</div>
			) : (
				<div className={styles.fileIcon}>
					<div>
						<IoMdDocument />
					</div>
					<div>{filename}</div>
				</div>
			)}
			<div className={styles.details}>
				<div>
					<span>Filename</span>
					<span>{filename ? filename : 'Loading...'}</span>
				</div>
				<div>
					<span>Created</span>
					<span>{createdAt && dayjs(new Date(createdAt)).fromNow()}</span>
				</div>
				<div>
					<span>Updated</span>
					<span>{updatedAt && dayjs(new Date(updatedAt)).fromNow()}</span>
				</div>
				<div>
					<span>Is shared?</span>
					<span>{isShared ? 'Yes' : 'No'}</span>
				</div>
				<div>
					<span>Is editable?</span>
					<span>{isEditable ? 'Yes' : 'No'}</span>
				</div>
				<div>
					<span>Size</span>
					<span>{size ? formatFileSizeAuto(size) : 'No'}</span>
				</div>
				{user && (
					<div>
						<span>Owner:</span>
						<span>{user.fullname}</span>
					</div>
				)}

				<div>
					<span>Content:</span>
					<span>{content ? parse(content) : 'No'}</span>
				</div>
			</div>
		</div>
	)
}

export default DocumentInformation
