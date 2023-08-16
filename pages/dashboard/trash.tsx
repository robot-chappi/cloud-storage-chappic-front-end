import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Trash from '@/app/components/screens/trash/Trash'

const TrashPage: NextPageAuth = () => {
	return <Trash />
}

TrashPage.isOnlyUser = true

export default TrashPage
