import { FC } from 'react'
import FilterWrapper from '@/app/components/ui/explorer/filters/FilterWrapper'
import Checkbox from '@/app/components/ui/checkbox/Checkbox'
import styles from '../GroupFilters.module.scss'
import { useDocumentExplorer } from '@/app/components/screens/document-explorer/useDocumentExplorer'
import { MdEdit } from 'react-icons/md'

const EditableGroup: FC = () => {
	const { queryParams, updateDocumentQueryParams } = useDocumentExplorer()

	const isChecked = queryParams.isEditable === 'true'

	return (
		<FilterWrapper title={'Editable:'}>
			<div className={styles.wrapper}>
				<Checkbox
					isChecked={isChecked}
					onClick={() =>
						updateDocumentQueryParams('isEditable', isChecked ? '' : 'true')
					}
					className={styles.checkbox}
				>
					<MdEdit />
				</Checkbox>
			</div>
		</FilterWrapper>
	)
}

export default EditableGroup
