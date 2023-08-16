import { FC, useState } from 'react'
import { IFile } from '@/app/types/file.interface'
import { getExtensionFromFileName } from '@/app/utils/string/getExtensionFromFilename'
import { getIconByExtension } from '@/app/utils/string/getIconFileFromFilename'
import { getColorByExtension } from '@/app/utils/string/getColorByExtension'
import { isImage } from '@/app/utils/string/isImage'
import Image from 'next/image'
import { getPublicFile, getUploads } from '@/app/configs/api.config'
import { useCopyToClipboard } from '@/app/hooks/useCopyToClipboard'
import Button from '@/app/components/ui/buttons/button/Button'
import { IoMdShare, IoMdThumbsUp } from 'react-icons/io'
import { siteName } from '@/app/configs/seo.config'
import styles from './FileItem.module.scss'
import DownloadButton from '@/app/components/ui/buttons/download-button/DownloadButton'
import RestoreButton from '@/app/components/ui/buttons/restore-button/RestoreButton'
import SharedButton from '@/app/components/ui/buttons/shared-button/SharedButton'
import { BsList } from 'react-icons/bs'
import cn from 'classnames'
import Link from 'next/link'
import { getFileLink } from '@/app/configs/app.config'
import { IoOpen } from 'react-icons/io5'

interface IFileItem {
	file: IFile
	restoreAction?: boolean
	isPreview?: boolean
}

const FileItem: FC<IFileItem> = ({ file, restoreAction, isPreview }) => {
	const extension = getExtensionFromFileName(file.filename)
	const FileIcon = getIconByExtension(extension)
	const fileColor = getColorByExtension(extension)

	const [isOpen, setIsOpen] = useState<boolean>(false)

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
							<Link href={getFileLink(String(file.id))} legacyBehavior>
								<a>
									<IoOpen />
								</a>
							</Link>
						)}
					</div>
					<div
						className={cn(styles.menuBtn, {
							[styles.open]: isOpen,
						})}
					>
						{restoreAction ? (
							<RestoreButton
								fileId={file.id}
								originalName={file.originalName}
							/>
						) : (
							<>
								<SharedButton
									fileId={file.id}
									originalName={file.originalName}
									isShared={file.isShared}
								/>
								{file.isShared && (
									<Button
										isTransparent={true}
										onClick={() =>
											handleCopy({
												text: `${siteName} | File: ${getPublicFile(
													file.filename
												)}`,
												textSuccess:
													'You have successfully copied the link on this file!',
												textError: 'You can not copied the link on this file!',
											})
										}
									>
										{isCopied ? <IoMdThumbsUp /> : <IoMdShare />}
									</Button>
								)}
								<DownloadButton fileId={file.id} filename={file.filename} />
							</>
						)}
					</div>
				</div>
			)}
			<div className={styles.info}>
				{isImage(file.filename) ? (
					<div className={styles.image}>
						<Image
							src={getUploads(file.path)}
							width={100}
							height={100}
							alt={''}
						/>
					</div>
				) : (
					<div className={styles.file}>
						<div
							style={{
								color: fileColor,
							}}
							className={styles.fileIcon}
						>
							<FileIcon />
						</div>
					</div>
				)}
				<div className={styles.originalName}>{file.originalName}</div>
			</div>
		</div>
	)
}

export default FileItem
