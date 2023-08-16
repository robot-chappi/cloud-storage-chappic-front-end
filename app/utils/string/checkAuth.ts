import { UserService } from '@/app/services/user/user.service'

export const checkAuth = async () => {
	try {
		await UserService.getProfile()

		return {
			props: {},
		}
	} catch (err) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		}
	}
}
