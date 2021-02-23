import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { actionLog } from './middleware/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { productSearchSlice } from './productSearch/slice'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store
