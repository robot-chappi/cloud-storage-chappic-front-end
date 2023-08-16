import { FC } from 'react'
import Button from '@/app/components/ui/buttons/button/Button'
import styles from './Pagination.module.scss'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

interface IPagination {
	quantityPage: number
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number
}

const Pagination: FC<IPagination> = ({
	quantityPage,
	numberPages,
	changePage,
	currentPage,
}) => {
	const pages = Array.from(
		{ length: numberPages > 1 ? numberPages : 1 },
		(_, index) => index + 1
	)

	const startPage = currentPage
		? currentPage - 2 <= 0
			? 0
			: currentPage - 2
		: 0

	const endPage = currentPage
		? currentPage + 1 >= numberPages
			? numberPages
			: currentPage + 1
		: 0

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons}>
				{currentPage && currentPage !== 1 && currentPage > 1 && (
					<Button
						onClick={() => changePage(String(Number(currentPage) - 1))}
						isIcon={true}
						disabled={currentPage === 1}
						isPagination={true}
					>
						<MdArrowLeft />
					</Button>
				)}

				{pages.slice(startPage, endPage).map((page) => (
					<Button
						isPagination={true}
						key={page}
						onClick={() => changePage(String(page))}
						className={currentPage === page ? 'opacity-60' : ''}
						disabled={currentPage === page}
					>
						{page}
					</Button>
				))}
				{currentPage &&
					currentPage !== numberPages &&
					currentPage < numberPages && (
						<Button
							onClick={() => changePage(String(currentPage + 1))}
							isIcon={true}
							disabled={currentPage === numberPages}
							isPagination={true}
						>
							<MdArrowRight />
						</Button>
					)}
			</div>
			<div className={styles.info}>
				<div>
					Quantity:
					<span>{quantityPage}</span>
				</div>
				<div>
					Page:
					<span>
						{currentPage} of {numberPages}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Pagination
