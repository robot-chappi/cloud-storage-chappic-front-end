import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import DocumentEdit from '@/app/components/screens/document-edit/DocumentEdit'

const DocumentEditPage: NextPageAuth = (props) => {
	return <DocumentEdit {...props} />
}

DocumentEditPage.isOnlyUser = true

export default DocumentEditPage
