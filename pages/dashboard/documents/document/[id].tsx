import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import DocumentPreview from '@/app/components/screens/document-preview/DocumentPreview'

const DocumentPage: NextPageAuth = (props) => {
	return <DocumentPreview {...props} />
}

DocumentPage.isOnlyUser = true

export default DocumentPage
