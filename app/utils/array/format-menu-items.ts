import { IMenuItem } from '@/app/components/layout/sidebar/menu/interfaces/menu.interface'
import { IAuthData } from '@/app/services/auth/auth.helper'

export const formatMenuItems = ({
	menuItems,
	user,
}: {
	menuItems: IMenuItem[]
	user: IAuthData['user']
}): IMenuItem[] => {
	if (!user) menuItems = menuItems.filter((item) => !item.verified)

	return menuItems.map((item) => {
		if (item.link === '/my-channel') return { ...item, link: `/c/${user?.id}` }

		return { ...item }
	})
}
