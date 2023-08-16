import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import FilePreview from '@/app/components/screens/file-preview/FilePreview'

const FilePage: NextPageAuth = (props) => {
	return <FilePreview {...props} />
}

FilePage.isOnlyUser = true

export default FilePage
