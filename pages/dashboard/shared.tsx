import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Shared from '@/app/components/screens/shared/Shared'

const SharedPage: NextPageAuth = () => {
	return <Shared />
}

SharedPage.isOnlyUser = true

export default SharedPage
