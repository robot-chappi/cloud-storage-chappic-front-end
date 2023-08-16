import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import formStyles from './DocumentEdit.module.scss'
import { useDocumentEditForm } from '@/app/components/screens/document-edit/useDocumentEditForm'
import Meta from '@/app/utils/meta/Meta'
import Heading from '@/app/components/ui/heading/Heading'
import Field from '@/app/components/ui/field/Field'
import Button from '@/app/components/ui/buttons/button/Button'
import SkeletonLoader from '@/app/components/ui/skeleton-loader/SkeletonLoader'
import Toggle from '@/app/components/ui/toggle/Toggle'

const DynamicTextEditor = dynamic(
	() => import('@/app/components/ui/text-editor/TextEditor'),
	{ ssr: false }
)

const DocumentEdit: FC<{ isEditable?: boolean }> = ({ isEditable }) => {
	const { form, status, actions, values } = useDocumentEditForm(isEditable)
	return (
		<Meta title="Edit document">
			<Heading title="Edit document" />
			{!isEditable && (
				<div className={formStyles.save_btn}>
					<Button
						isSmall
						onClick={() => actions.saveDocument(Number(values.documentId))}
					>
						Save as File
					</Button>
				</div>
			)}
			<form
				onSubmit={form.handleSubmit(form.onSubmit)}
				className={formStyles.form}
			>
				{(status.isLoading && !isEditable) ||
				(status.isLoadingPublic && isEditable) ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...form.register('filename')}
								placeholder="Filename"
								error={form.errors.filename}
							/>

							{!isEditable && (
								<Controller
									control={form.control}
									name="isShared"
									render={({ field: { onChange, value } }) => (
										<Toggle
											label={'Is shared?'}
											clickHandler={() => {
												onChange(!value)
											}}
											isEnabled={!!value}
										/>
									)}
								/>
							)}

							{!isEditable && (
								<Controller
									control={form.control}
									name="isEditable"
									render={({ field: { onChange, value } }) => (
										<Toggle
											label={'Is editable?'}
											clickHandler={() => {
												onChange(!value)
											}}
											isEnabled={!!value}
										/>
									)}
								/>
							)}
						</div>

						<Controller
							control={form.control}
							name="content"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder="Content"
								/>
							)}
						/>

						<Button className={formStyles.button}>Save</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default DocumentEdit
