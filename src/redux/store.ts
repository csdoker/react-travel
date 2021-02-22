import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { actionLog } from './middleware/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

export type RootState = ReturnType<typeof store.getState>

export default store
