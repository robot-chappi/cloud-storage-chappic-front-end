import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Files from '@/app/components/screens/files/Files'

const FilesPage: NextPageAuth = () => {
	return <Files />
}

FilesPage.isOnlyUser = true

export default FilesPage
