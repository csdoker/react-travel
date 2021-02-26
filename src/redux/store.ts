import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { actionLog } from './middleware/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { shoppingCartSlice } from './shoppingCart/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer
})

const persistdReducer = persistReducer(
  persistConfig,
  rootReducer
)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: persistdReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), actionLog],
  devTools: true
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor }
