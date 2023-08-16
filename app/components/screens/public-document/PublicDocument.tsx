import { FC } from 'react'
import { useRouter } from 'next/router'
import Alert from '@/app/components/screens/alert/Alert'
import DownloadButton from '@/app/components/ui/buttons/download-button/DownloadButton'
import Meta from '@/app/utils/meta/Meta'
import styles from './PublicDocument.module.scss'
import { documentApi } from '@/app/store/api/document.api'
import { IDocument } from '@/app/types/document.interface'
import DocumentInformation from '@/app/components/ui/document/document-information/DocumentInformation'
import Button from '@/app/components/ui/buttons/button/Button'

const PublicDocument: FC = () => {
	const { query } = useRouter()

	const {
		data: documentItem = {} as IDocument,
		isSuccess,
		refetch,
	} = documentApi.useGetSharedBySecurePathQuery(String(query.securepath), {
		skip: !query?.securepath,
	})

	return isSuccess ? (
		<Meta title={'Downloading document'}>
			<div className={styles.wrapper}>
				<DocumentInformation
					user={documentItem.user}
					filename={documentItem.filename}
					size={documentItem.size}
					content={documentItem.content}
					createdAt={documentItem.createdAt}
					updatedAt={documentItem.updatedAt}
					isEditable={documentItem.isEditable}
					isShared={documentItem.isShared}
				/>
				<div className={styles.action}>
					{/*{documentItem.path && (*/}
					<DownloadButton
						isDocument
						fileId={documentItem.id}
						filename={documentItem.filename}
						title={'Download'}
					/>
					{/*)}*/}
					<Button onClick={refetch} isPrimary={true}>
						Reload
					</Button>
				</div>
			</div>
		</Meta>
	) : (
		<Alert
			title={'Does not exist'}
			description={
				'This document does not exist, please return to the main page'
			}
			layoutTitle={'404'}
			link={'/'}
			linkText={'Go to home page'}
			isPage={true}
		/>
	)
}

export default PublicDocument
