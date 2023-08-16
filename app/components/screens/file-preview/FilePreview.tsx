import { FC } from 'react'
import { useRouter } from 'next/router'
import { IFile } from '@/app/types/file.interface'
import { fileApi } from '@/app/store/api/file.api'
import Meta from '@/app/utils/meta/Meta'
import styles from '@/app/components/screens/public-file/PublicFile.module.scss'
import FileInformation from '@/app/components/ui/file/file-information/FileInformation'
import Alert from '@/app/components/screens/alert/Alert'
import Button from '@/app/components/ui/buttons/button/Button'

const FilePreview: FC = () => {
	const { query, back } = useRouter()

	const { data: file = {} as IFile, isSuccess } = fileApi.useGetFileQuery(
		Number(query.id),
		{
			skip: !query?.id,
		}
	)

	return isSuccess ? (
		<Meta title={file.filename}>
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
				<div className={styles.btn}>
					<Button onClick={() => back()} isPrimary={true}>
						Go back
					</Button>
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

export default FilePreview
