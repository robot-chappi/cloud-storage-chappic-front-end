import { api } from '@/app/store/api/api'
import {
	IFile,
	IFileDataFilters,
	IFileResponse,
} from '@/app/types/file.interface'
import { getFileUrl } from '@/app/configs/api.config'

export const fileApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSharedByFilename: builder.query<IFile, string>({
			query: (filename) => getFileUrl(`/${filename}`),
			providesTags: (result, error, filename) => [{ type: 'Files', filename }],
		}),
		getFile: builder.query<IFile, number>({
			query: (id) => ({
				url: getFileUrl(`/file/${id}`),
			}),
			providesTags: (result, error, id) => [{ type: 'Files', id }],
		}),
		getFiles: builder.query<IFileResponse, IFileDataFilters>({
			query: (queryData) => ({
				url: getFileUrl(),
				params: queryData,
			}),
			providesTags: (result) =>
				result?.files
					? [
							...result.files.map(({ id }) => ({ type: 'Files', id }) as const),
							{ type: 'Files' },
					  ]
					: [{ type: 'Files' }],
		}),
		toggleShared: builder.mutation<void, number>({
			query: (id) => ({
				url: getFileUrl(`/toggle-shared/${id}`),
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Files', id },
				{ type: 'Files' },
			],
		}),
		restoreFile: builder.mutation<void, number>({
			query: (id) => ({
				url: getFileUrl(`/${id}`),
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Files', id },
				{ type: 'Files' },
			],
		}),
		deleteFile: builder.mutation<void, number[]>({
			query: (ids) => ({
				url: getFileUrl(),
				method: 'DELETE',
				params: {
					ids,
				},
			}),
			invalidatesTags: (result, error, ids) => [
				...ids.map(
					(id) =>
						({
							type: 'Files',
							id,
						}) as const
				),
				{ type: 'Files' },
			],
		}),
		deletePermanentFile: builder.mutation<void, number[]>({
			query: (ids) => ({
				url: getFileUrl('/permanent'),
				method: 'DELETE',
				params: {
					ids,
				},
			}),
			invalidatesTags: (result, error, ids) => [
				...ids.map(
					(id) =>
						({
							type: 'Files',
							id,
						}) as const
				),
				{ type: 'Files' },
			],
		}),
	}),
})
