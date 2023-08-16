import { NextPage } from 'next'
import DocumentEdit from '@/app/components/screens/document-edit/DocumentEdit'

const EditEditableDocumentPage: NextPage = (props) => {
	return <DocumentEdit isEditable {...props} />
}

export default EditEditableDocumentPage
