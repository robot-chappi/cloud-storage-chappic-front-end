import { NextPageAuth } from '@/app/providers/interfaces/private-route.interface'
import Profile from '@/app/components/screens/profile/Profile'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
