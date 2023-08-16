import { FC } from 'react'
import { fileApi } from '@/app/store/api/file.api'
import { useRouter } from 'next/router'
import { IFile } from '@/app/types/file.interface'
import Alert from '@/app/components/screens/alert/Alert'
import DownloadButton from '@/app/components/ui/buttons/download-button/DownloadButton'
import Meta from '@/app/utils/meta/Meta'
import FileInformation from '@/app/components/ui/file/file-information/FileInformation'
import styles from './PublicFile.module.scss'

const PublicFile: FC = () => {
	const { query } = useRouter()

	const { data: file = {} as IFile, isSuccess } =
		fileApi.useGetSharedByFilenameQuery(String(query.filename), {
			skip: !query?.filename,
		})

	return isSuccess ? (
		<Meta title={'Downloading file'}>
			<div className={styles.wrapper}>
				<FileInformation
					user={file.user}
					path={file.path}
					filename={file.filename}
					originalName={file.filename}
					size={file.size}
					mimetype={file.mimetype}
					content={file.content}
				/>
				<div className={styles.action}>
					<DownloadButton
						fileId={file.id}
						filename={file.filename}
						title={'Download'}
					/>
				</div>
			</div>
		</Meta>
	) : (
		<Alert
			title={'Does not exist'}
			description={'This file does not exist, please return to the main page'}
			layoutTitle={'404'}
			link={'/'}
			linkText={'Go to home page'}
			isPage={true}
		/>
	)
}

export default PublicFile
