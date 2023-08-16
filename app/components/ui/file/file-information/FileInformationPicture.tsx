import { FC } from 'react'
import { getExtensionFromFileName } from '@/app/utils/string/getExtensionFromFilename'
import { getIconByExtension } from '@/app/utils/string/getIconFileFromFilename'
import { getColorByExtension } from '@/app/utils/string/getColorByExtension'
import { isImage } from '@/app/utils/string/isImage'
import Image from 'next/image'
import { getUploads } from '@/app/configs/api.config'
import styles from './FileInformation.module.scss'
import { isVideo } from '@/app/utils/string/isVideo'

const FileInformationPicture: FC<{
	path: string
	filename: string
	mimetype: string
	originalName: string
}> = ({ path, filename, originalName, mimetype }) => {
	const extension = getExtensionFromFileName(filename)
	const FileIcon = getIconByExtension(extension)
	const fileColor = getColorByExtension(extension)

	return (
		<div>
			{isImage(filename) ? (
				<Image
					src={getUploads(path)}
					width={344}
					height={190}
					alt={''}
					layout="responsive"
				/>
			) : isVideo(mimetype) ? (
				<div className={styles.fileIcon} style={{ color: fileColor }}>
					<video src={getUploads(path)} width={450} controls />
				</div>
			) : (
				<div className={styles.fileIcon} style={{ color: fileColor }}>
					<div>
						<FileIcon />
					</div>
					<div>{originalName}</div>
				</div>
			)}
		</div>
	)
}

export default FileInformationPicture
