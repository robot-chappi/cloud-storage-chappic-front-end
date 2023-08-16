import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Explorer from '@/app/components/screens/explorer/Explorer'

const ExplorerPage: NextPageAuth = () => {
	return <Explorer />
}

ExplorerPage.isOnlyUser = true

export default ExplorerPage
