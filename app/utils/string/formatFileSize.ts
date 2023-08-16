export enum EnumFormatFileSize {
	BYTE = 'byte',
	KILOBYTE = 'kilobyte',
	MEGABYTE = 'megabyte',
	GIGABYTE = 'gigabyte',
}

export const formatFileSizeAuto = (size: number) => {
	if (size < 1024) {
		return size + ' B'
	} else if (size < 1048576) {
		return (size / 1024).toFixed(2) + ' KB'
	} else if (size < 1073741824) {
		return (size / 1048576).toFixed(2) + ' MB'
	} else {
		return (size / 1073741824).toFixed(2) + ' GB'
	}
}

export const formatFileSizeManual = ({
	size,
	type,
}: {
	size: number
	type: EnumFormatFileSize
}) => {
	if (type === EnumFormatFileSize.BYTE) {
		return size + ' B'
	} else if (type === EnumFormatFileSize.KILOBYTE) {
		return (size / 1024).toFixed(2) + ' KB'
	} else if (type === EnumFormatFileSize.MEGABYTE) {
		return (size / 1048576).toFixed(2) + ' MB'
	} else if (type === EnumFormatFileSize.GIGABYTE) {
		return (size / 1073741824).toFixed(2) + ' GB'
	} else {
		return 'Size: ' + size
	}
}

export const formatFileSizeChartMB = (size: number) => {
	return Number((size / 1048576).toFixed(1))
}
