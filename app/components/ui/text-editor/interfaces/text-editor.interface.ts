import { FieldError } from 'react-hook-form'
import { EditorProps } from 'draft-js'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
