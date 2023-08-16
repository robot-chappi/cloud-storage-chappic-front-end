import { FC } from 'react'

import styles from './FileInformation.module.scss'
import { IFile } from '@/app/types/file.interface'
import FileInformationPicture from '@/app/components/ui/file/file-information/FileInformationPicture'
import { formatFileSizeAuto } from '@/app/utils/string/formatFileSize'
import { IUser } from '@/app/types/user.interface'
import { isText } from '@/app/utils/string/isText'

interface IFileInformation
	extends Pick<
		IFile,
		'path' | 'filename' | 'mimetype' | 'originalName' | 'size' | 'content'
	> {
	user?: IUser
}

const FileInformation: FC<IFileInformation> = ({
	user,
	path,
	filename,
	mimetype,
	originalName,
	size,
	content,
}) => {
	return (
		<div className={styles.info}>
			{!filename ? (
				<div className={styles.file}>File is loading...</div>
			) : (
				<FileInformationPicture
					mimetype={mimetype}
					path={path}
					filename={filename}
					originalName={originalName}
				/>
			)}
			<div className={styles.details}>
				<div>
					<span>Original name</span>
					<span>{originalName ? originalName : 'Loading...'}</span>
				</div>
				<div>
					<span>Mimetype</span>
					<span>{mimetype ? mimetype : 'Loading...'}</span>
				</div>
				<div>
					<span>Size</span>
					<span>{size ? formatFileSizeAuto(size) : 'Loading...'}</span>
				</div>
				{user && (
					<div>
						<span>Owner:</span>
						<span>{user.fullname}</span>
					</div>
				)}
				{isText(mimetype) && content && (
					<div>
						<span>Content:</span>
						<span className={styles.content}>{content}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default FileInformation
