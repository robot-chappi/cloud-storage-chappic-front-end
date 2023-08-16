import { IMenuItem } from '@/app/components/layout/sidebar/menu/interfaces/menu.interface'
import {
	HiHome,
	HiInformationCircle,
	HiLogin,
	HiSearch,
	HiShare,
	HiTrash,
	HiViewList,
} from 'react-icons/hi'
import { HiPhoto } from 'react-icons/hi2'
import { MdEdit } from 'react-icons/md'
import { IoDocument } from 'react-icons/io5'

export const menu: IMenuItem[] = [
	{
		title: 'Home',
		icon: HiHome,
		link: '/',
		verified: false,
	},
	{
		title: 'About',
		icon: HiInformationCircle,
		link: '/about',
		verified: false,
	},
]

export const dashboardMenu: IMenuItem[] = [
	{
		title: 'Explorer',
		icon: HiSearch,
		link: '/dashboard/explorer',
		verified: true,
	},
	{
		title: 'Files',
		icon: HiViewList,
		link: '/dashboard/files',
		verified: true,
	},
	{
		title: 'Photos',
		icon: HiPhoto,
		link: '/dashboard/photos',
		verified: true,
	},
	{
		title: 'Shared',
		icon: HiShare,
		link: '/dashboard/shared',
		verified: true,
	},
	{
		title: 'Trash',
		icon: HiTrash,
		link: '/dashboard/trash',
		verified: true,
	},
]

export const dashboardDocumentMenu: IMenuItem[] = [
	{
		title: 'Explorer',
		icon: HiSearch,
		link: '/dashboard/documents/explorer',
		verified: true,
	},
	{
		title: 'Documents',
		icon: IoDocument,
		link: '/dashboard/documents/documents',
		verified: true,
	},
	{
		title: 'Editable',
		icon: MdEdit,
		link: '/dashboard/documents/editable',
		verified: true,
	},
	{
		title: 'Shared',
		icon: HiShare,
		link: '/dashboard/documents/shared',
		verified: true,
	},
	{
		title: 'Trash',
		icon: HiTrash,
		link: '/dashboard/documents/trash',
		verified: true,
	},
]

export const authMenu: IMenuItem[] = [
	{
		title: 'Auth',
		icon: HiLogin,
		link: '/auth',
		verified: false,
	},
]
