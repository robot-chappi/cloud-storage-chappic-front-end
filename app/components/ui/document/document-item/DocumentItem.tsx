import { FC, useState } from 'react'
import { useCopyToClipboard } from '@/app/hooks/useCopyToClipboard'
import styles from './DocumentItem.module.scss'
import { BsList } from 'react-icons/bs'
import cn from 'classnames'
import Link from 'next/link'
import { getDocumentLink } from '@/app/configs/app.config'
import { IoOpen, IoReload } from 'react-icons/io5'
import { IDocument } from '@/app/types/document.interface'
import { IoMdDocument, IoMdShare, IoMdThumbsUp } from 'react-icons/io'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import RestoreButton from '@/app/components/ui/buttons/restore-button/RestoreButton'
import Button from '@/app/components/ui/buttons/button/Button'
import { siteName } from '@/app/configs/seo.config'
import {
	getPublicDocument,
	getPublicEditDocument,
} from '@/app/configs/api.config'
import DownloadButton from '@/app/components/ui/buttons/download-button/DownloadButton'
import { MdEdit } from 'react-icons/md'

dayjs.extend(relativeTime)

interface IDocumentItem {
	documentItem: IDocument
	restoreAction?: boolean
	isPreview?: boolean
}

const DocumentItem: FC<IDocumentItem> = ({
	documentItem,
	restoreAction,
	isPreview,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPublic, setIsPublic] = useState<boolean>(true)
	const { isCopied, handleCopy } = useCopyToClipboard(3000)

	return (
		<div
			className={cn(styles.wrapper, {
				[styles.wrapper_small]: isPreview,
			})}
		>
			{!isPreview && (
				<div className={styles.btn}>
					<div className={styles.wrapper_btn}>
						<button
							className={cn(styles.toggle, {
								[styles.active]: isOpen,
							})}
							onClick={() => setIsOpen(!isOpen)}
						>
							<BsList />
						</button>
						{!restoreAction && (
							<div className={styles.actions}>
								<Link
									href={getDocumentLink(`document/${documentItem.id}`)}
									legacyBehavior
								>
									<a>
										<IoOpen />
									</a>
								</Link>
								<Link
									href={getDocumentLink(`edit/${documentItem.id}`)}
									legacyBehavior
								>
									<a>
										<MdEdit />
									</a>
								</Link>
							</div>
						)}
					</div>
					<div
						className={cn(styles.menuBtn, {
							[styles.open]: isOpen,
						})}
					>
						{restoreAction ? (
							<>
								<div className={styles.menu_item}>
									<span>Restore:</span>
									<span>
										<RestoreButton
											isDocument
											fileId={documentItem.id}
											originalName={documentItem.filename}
										/>
									</span>
								</div>
								<div className={styles.menu_item}>
									<span>Deleted:</span>
									<span>
										{documentItem.deletedAt &&
											dayjs(new Date(documentItem.deletedAt)).fromNow()}
									</span>
								</div>
							</>
						) : (
							<>
								<div className={styles.item}>
									{documentItem.isShared && documentItem.isEditable && (
										<button
											className={styles.item_btn}
											onClick={() => setIsPublic(!isPublic)}
										>
											<IoReload />
										</button>
									)}
									{documentItem.isShared && isPublic && (
										<div className={styles.menu_item}>
											<span>Public link: </span>
											<Button
												isTransparent={true}
												onClick={() =>
													handleCopy({
														text: `${siteName} | File: ${getPublicDocument(
															documentItem.securePath
														)}`,
														textSuccess:
															'You have successfully copied the link on this document!',
														textError:
															'You can not copied the link on this document!',
													})
												}
											>
												{isCopied ? <IoMdThumbsUp /> : <IoMdShare />}
											</Button>
										</div>
									)}
									{documentItem.isEditable && !isPublic && (
										<div className={styles.menu_item}>
											<span>Edit link:</span>
											<Button
												isTransparent={true}
												onClick={() =>
													handleCopy({
														text: `${siteName} | File: ${getPublicEditDocument(
															documentItem.securePath
														)}`,
														textSuccess:
															'You have successfully copied the link on this document to edit!',
														textError:
															'You can not copied the link on this document to edit!',
													})
												}
											>
												{isCopied ? <IoMdThumbsUp /> : <IoMdShare />}
											</Button>
										</div>
									)}
								</div>
								<div className={styles.menu_item}>
									<span>Updated:</span>
									<span>
										{documentItem.updatedAt &&
											dayjs(new Date(documentItem.updatedAt)).fromNow()}
									</span>
								</div>
								<div className={styles.menu_item}>
									<span>Created:</span>
									<span>
										{documentItem.createdAt &&
											dayjs(new Date(documentItem.createdAt)).fromNow()}
									</span>
								</div>
								{documentItem.path && (
									<DownloadButton
										isDocument
										fileId={documentItem.id}
										filename={documentItem.filename}
									/>
								)}
							</>
						)}
					</div>
				</div>
			)}
			<div className={styles.info}>
				<div className={styles.file}>
					<div className={styles.fileIcon}>
						<IoMdDocument />
					</div>
				</div>
				<div className={styles.originalName}>{documentItem.filename}</div>
			</div>
		</div>
	)
}

export default DocumentItem
