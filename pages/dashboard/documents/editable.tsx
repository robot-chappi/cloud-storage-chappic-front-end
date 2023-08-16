import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Editable from '@/app/components/screens/editable/Editable'

const EditablePage: NextPageAuth = () => {
	return <Editable />
}

EditablePage.isOnlyUser = true

export default EditablePage
