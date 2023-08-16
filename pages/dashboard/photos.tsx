import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Photos from '@/app/components/screens/photos/Photos'

const PhotosPage: NextPageAuth = () => {
	return <Photos />
}

PhotosPage.isOnlyUser = true

export default PhotosPage
