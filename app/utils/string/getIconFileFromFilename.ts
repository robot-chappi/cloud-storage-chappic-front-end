import {
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
import { IconType } from 'react-icons'
import { AiOutlineFile } from 'react-icons/ai'

const extIcon = {
	pdf: BsFiletypePdf,
	mp4: BsFiletypeMp4,
	mov: BsFiletypeMov,
	xls: BsFiletypeXls,
	xlsx: BsFiletypeXlsx,
	doc: BsFiletypeDoc,
	docx: BsFiletypeDocx,
	txt: BsFiletypeTxt,
	png: BsFiletypePng,
	gif: BsFiletypeGif,
	jpg: BsFiletypeJpg,
	jpeg: SiJpeg,
	zip: BsFileZip,
} as const

export const getIconByExtension = (ext: string): IconType => {
	return extIcon[ext as keyof typeof extIcon]
		? extIcon[ext as keyof typeof extIcon]
		: AiOutlineFile
}
