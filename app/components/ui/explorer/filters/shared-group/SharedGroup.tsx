import { FC } from 'react'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import FilterWrapper from '@/app/components/ui/explorer/filters/FilterWrapper'
import Checkbox from '@/app/components/ui/checkbox/Checkbox'
import styles from '../GroupFilters.module.scss'
import { BsShare } from 'react-icons/bs'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'

const SharedGroup: FC<{ isDocumentFilter?: boolean }> = ({
	isDocumentFilter,
}) => {
	const { queryParams, updateQueryParams } = useExplorer()
	const { queryParams: queryDocumentsParams, updateDocumentQueryParams } =
		useDocumentExplorer()

	const isChecked = queryParams.isShared === 'true'
	const isDocumentChecked = queryDocumentsParams.isShared === 'true'

	const handleCheckboxClick = () => {
		if (isDocumentChecked) {
			updateDocumentQueryParams('isShared', isDocumentChecked ? '' : 'true')
		} else {
			updateQueryParams('isShared', isChecked ? '' : 'true')
		}
	}

	return (
		<FilterWrapper title={'Shared:'}>
			<div className={styles.wrapper}>
				<Checkbox
					isChecked={isDocumentFilter ? isDocumentChecked : isChecked}
					onClick={handleCheckboxClick}
					className={styles.checkbox}
				>
					<BsShare />
				</Checkbox>
			</div>
		</FilterWrapper>
	)
}

export default SharedGroup
