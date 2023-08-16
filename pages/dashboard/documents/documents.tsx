import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Files from '@/app/components/screens/files/Files'

const DocumentsPage: NextPageAuth = () => {
	return <Files isDocument />
}

DocumentsPage.isOnlyUser = true

export default DocumentsPage
