import { FC } from 'react'
import MimetypeGroup from '@/app/components/ui/explorer/filters/mimetype-group/MimetypeGroup'
import DeletedGroup from '@/app/components/ui/explorer/filters/deleted-group/DeletedGroup'
import SharedGroup from '@/app/components/ui/explorer/filters/shared-group/SharedGroup'
import Search from '@/app/components/ui/explorer/filters/search/Search'
import Button from '@/app/components/ui/buttons/button/Button'
import styles from './Filters.module.scss'
import EditableGroup from '@/app/components/ui/explorer/filters/editable-group/EditableGroup'

const Filters: FC<{
	resetFilters: () => void
	isDocumentFilter?: boolean
}> = ({ resetFilters, isDocumentFilter }) => {
	return (
		<div>
			<Search isDocumentFilter={isDocumentFilter} />
			{!isDocumentFilter && <MimetypeGroup />}
			{isDocumentFilter && <EditableGroup />}
			<div>
				<DeletedGroup isDocumentFilter={isDocumentFilter} />
				<SharedGroup isDocumentFilter={isDocumentFilter} />
			</div>
			<div className={styles.reset}>
				<Button onClick={resetFilters}>Reset</Button>
			</div>
		</div>
	)
}

export default Filters
