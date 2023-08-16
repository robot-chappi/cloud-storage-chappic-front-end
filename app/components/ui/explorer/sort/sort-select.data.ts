import { EnumFileSort } from '@/app/types/file.interface'
import { ISelectItem } from '@/app/components/ui/select/interfaces/select.interface'

export const SORT_SELECT_DATA: ISelectItem<EnumFileSort>[] = [
	{
		key: EnumFileSort.NEWEST,
		label: 'Newest',
	},
	{
		key: EnumFileSort.OLDEST,
		label: 'Oldest',
	},
]
