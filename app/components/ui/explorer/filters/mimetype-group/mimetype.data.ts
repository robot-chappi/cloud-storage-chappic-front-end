import {
	BsFileImage,
	BsFileText,
	BsFiletypeDoc,
	BsFiletypeDocx,
	BsFiletypeGif,
	BsFiletypeJpg,
	BsFiletypeMov,
	BsFiletypeMp4,
	BsFiletypePdf,
	BsFiletypePng,
	BsFiletypeTxt,
	BsFiletypeXls,
	BsFiletypeXlsx,
	BsFileZip,
} from 'react-icons/bs'
import { SiJpeg } from 'react-icons/si'
import { FaFileVideo } from 'react-icons/fa'

export const mimetypeData = [
	{ value: 'text', icon: BsFileText },
	{ value: 'image', icon: BsFileImage },
	{ value: 'video', icon: FaFileVideo },
	{ value: 'application', icon: BsFiletypeDoc },
	{ value: 'application/pdf', icon: BsFiletypePdf },
	{ value: 'video/mp4', icon: BsFiletypeMp4 },
	{ value: 'video/mov', icon: BsFiletypeMov },
	{ value: 'application/vnd.ms-excel', icon: BsFiletypeXls },
	{
		value:
			'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
		icon: BsFiletypeXlsx,
	},
	{ value: 'application/msword', icon: BsFiletypeDoc },
	{
		value:
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		icon: BsFiletypeDocx,
	},
	{ value: 'text/plain', icon: BsFiletypeTxt },
	{ value: 'image/png', icon: BsFiletypePng },
	{ value: 'image/gif', icon: BsFiletypeGif },
	{ value: 'image/jpg', icon: BsFiletypeJpg },
	{ value: 'image/jpeg', icon: SiJpeg },
	{ value: 'application/zip', icon: BsFileZip },
]
