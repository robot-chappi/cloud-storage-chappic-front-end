import { FC } from 'react'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'
import FilterWrapper from '@/app/components/ui/explorer/filters/FilterWrapper'
import Checkbox from '@/app/components/ui/checkbox/Checkbox'
import styles from '../GroupFilters.module.scss'
import { BsTrash } from 'react-icons/bs'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'

const DeletedGroup: FC<{ isDocumentFilter?: boolean }> = ({
	isDocumentFilter,
}) => {
	const { queryParams, updateQueryParams } = useExplorer()
	const { queryParams: queryDocumentParams, updateDocumentQueryParams } =
		useDocumentExplorer()

	const isChecked = queryParams.isDeleted === 'true'
	const isDocumentChecked = queryDocumentParams.isDeleted === 'true'

	const handleCheckboxClick = () => {
		if (isDocumentChecked) {
			updateDocumentQueryParams('isDeleted', isDocumentChecked ? '' : 'true')
		} else {
			updateQueryParams('isDeleted', isChecked ? '' : 'true')
		}
	}

	return (
		<FilterWrapper title={'Deleted:'}>
			<div className={styles.wrapper}>
				<Checkbox
					isChecked={isDocumentFilter ? isDocumentChecked : isChecked}
					onClick={handleCheckboxClick}
					className={styles.checkbox}
				>
					<BsTrash />
				</Checkbox>
			</div>
		</FilterWrapper>
	)
}

export default DeletedGroup
