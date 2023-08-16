import { FC } from 'react'
import { useRouter } from 'next/router'
import Meta from '@/app/utils/meta/Meta'
import styles from '@/app/components/screens/public-file/PublicFile.module.scss'
import Alert from '@/app/components/screens/alert/Alert'
import Button from '@/app/components/ui/buttons/button/Button'
import { documentApi } from '@/app/store/api/document.api'
import DocumentInformation from '@/app/components/ui/document/document-information/DocumentInformation'
import { IDocument } from '@/app/types/document.interface'

const DocumentPreview: FC = () => {
	const { query, push } = useRouter()

	const {
		data: documentItem = {} as IDocument,
		isSuccess,
		refetch,
	} = documentApi.useGetDocumentQuery(Number(query.id), {
		skip: !query?.id,
	})

	return isSuccess ? (
		<Meta title={documentItem.filename}>
			<div className={styles.wrapper}>
				<DocumentInformation
					user={documentItem.user}
					filename={documentItem.filename}
					size={documentItem.size}
					content={documentItem.content}
					isShared={documentItem.isShared}
					isEditable={documentItem.isEditable}
					createdAt={documentItem.createdAt}
					updatedAt={documentItem.updatedAt}
				/>
				<div className={styles.btn}>
					<Button
						onClick={() => push('/dashboard/documents/documents')}
						isPrimary={true}
					>
						Go to documents
					</Button>
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

export default DocumentPreview
