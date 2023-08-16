import { FC } from 'react'

import styles from './Search.module.scss'
import { useSearch } from '@/app/components/ui/explorer/filters/search/useSearch'
import { BsSearch } from 'react-icons/bs'

const Search: FC<{ isDocumentFilter?: boolean }> = ({ isDocumentFilter }) => {
	const { handleSearch, handleClick, searchTerm } = useSearch(isDocumentFilter)

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type={'text'}
					placeholder={'Поиск...'}
					value={searchTerm}
					onChange={handleSearch}
				/>
				<button onClick={handleClick}>
					<BsSearch />
				</button>
			</label>
		</div>
	)
}

export default Search
