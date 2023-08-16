import { FC } from 'react'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import FilterWrapper from '@/app/components/ui/explorer/filters/FilterWrapper'
import { mimetypeData } from '@/app/components/ui/explorer/filters/mimetype-group/mimetype.data'
import Checkbox from '@/app/components/ui/checkbox/Checkbox'
import styles from '../GroupFilters.module.scss'

const MimetypeGroup: FC = () => {
	const { queryParams, updateQueryParams } = useExplorer()

	return (
		<FilterWrapper title={'Mimetype:'}>
			<div className={styles.wrapper}>
				{mimetypeData.map((type) => {
					const isChecked = queryParams.mimetype === type.value

					return (
						<Checkbox
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams('mimetype', isChecked ? '' : type.value)
							}
							key={type.value}
							className={styles.checkbox}
						>
							<type.icon />
						</Checkbox>
					)
				})}
			</div>
		</FilterWrapper>
	)
}

export default MimetypeGroup
