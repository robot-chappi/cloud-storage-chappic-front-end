import { api } from '@/app/store/api/api'
import { getDocumentUrl } from '@/app/configs/api.config'
import {
	IDocument,
	IDocumentDataFilters,
	IDocumentDto,
	IDocumentPublicDto,
	IDocumentResponse,
} from '@/app/types/document.interface'

export const documentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSharedBySecurePath: builder.query<IDocument, string>({
			query: (securePath) => getDocumentUrl(`/${securePath}`),
			providesTags: (result, error, id) => [{ type: 'Documents', id }],
		}),
		getEditableBySecurePath: builder.query<IDocument, string>({
			query: (securePath) => getDocumentUrl(`/editable/${securePath}`),
			providesTags: (result, error, id) => [{ type: 'Documents', id }],
		}),
		getDocument: builder.query<IDocument, number>({
			query: (id) => ({
				url: getDocumentUrl(`/document/${id}`),
			}),
			providesTags: (result, error, id) => [{ type: 'Documents', id }],
		}),
		getDocuments: builder.query<IDocumentResponse, IDocumentDataFilters>({
			query: (queryData) => ({
				url: getDocumentUrl(),
				params: queryData,
			}),
			providesTags: (result) =>
				result?.documents
					? [
							...result.documents.map(
								({ id }) => ({ type: 'Documents', id }) as const
							),
							{ type: 'Documents' },
					  ]
					: [{ type: 'Documents' }],
		}),
		createDocument: builder.mutation<string, void>({
			query: () => ({
				url: getDocumentUrl(),
				method: 'POST',
			}),
			invalidatesTags: () => [{ type: 'Documents' }],
		}),
		updateDocumentPublic: builder.mutation<IDocument, IDocumentPublicDto>({
			query: ({ securePath, ...body }) => ({
				url: getDocumentUrl(`/public/${securePath}`),
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Documents', id },
				{ type: 'Documents' },
			],
		}),
		updateDocument: builder.mutation<IDocument, IDocumentDto>({
			query: ({ id, ...body }) => ({
				url: getDocumentUrl(`/${id}`),
				method: 'PUT',
				body,
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Documents', id },
				{ type: 'Documents' },
			],
		}),
		saveFileDocument: builder.mutation<IDocument, number>({
			query: (id) => ({
				url: getDocumentUrl(`/save/${id}`),
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Documents', id },
				{ type: 'Documents' },
			],
		}),
		restoreDocument: builder.mutation<void, number>({
			query: (id) => ({
				url: getDocumentUrl(`/${id}`),
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Documents', id },
				{ type: 'Documents' },
			],
		}),
		deleteDocument: builder.mutation<void, number[]>({
			query: (ids) => ({
				url: getDocumentUrl(),
				method: 'DELETE',
				params: {
					ids,
				},
			}),
			invalidatesTags: (result, error, ids) => [
				...ids.map(
					(id) =>
						({
							type: 'Documents',
							id,
						}) as const
				),
				{ type: 'Documents' },
			],
		}),
		deletePermanentDocument: builder.mutation<void, number[]>({
			query: (ids) => ({
				url: getDocumentUrl('/permanent'),
				method: 'DELETE',
				params: {
					ids,
				},
			}),
			invalidatesTags: (result, error, ids) => [
				...ids.map(
					(id) =>
						({
							type: 'Documents',
							id,
						}) as const
				),
				{ type: 'Documents' },
			],
		}),
	}),
})
