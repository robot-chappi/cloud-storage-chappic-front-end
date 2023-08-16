import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import DocumentExplorer from '@/app/components/screens/document-explorer/DocumentExplorer'

const ExplorerPage: NextPageAuth = () => {
	return <DocumentExplorer />
}

ExplorerPage.isOnlyUser = true

export default ExplorerPage
