const extColor = {
	pdf: 'purple',
	mp4: 'purple',
	mov: 'green',
	xls: 'green',
	xlsx: 'green',
	doc: 'blue',
	docx: 'blue',
	txt: 'blue',
	gif: 'green',
	png: 'orange',
	jpg: 'orange',
	jpeg: 'orange',
	zip: 'red',
} as const

export type Extension = keyof typeof extColor
export type Color = (typeof extColor)[Extension]

export const getColorByExtension = (ext: string): Color | string => {
	return extColor[ext as keyof typeof extColor]
		? extColor[ext as keyof typeof extColor]
		: 'black'
}
