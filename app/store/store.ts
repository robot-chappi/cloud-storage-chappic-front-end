import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from '@/app/store/middlewares/error.middleware'
import { api } from '@/app/store/api/api'
import { rootReducer } from '@/app/store/root-reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'sidebarReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
