import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState } from '../store'

export const FETCH_RECOMMED_PRODUCTS_START = 'FETCH_RECOMMED_PRODUCTS_START'
export const FETCH_RECOMMED_PRODUCTS_SUCCESS = 'FETCH_RECOMMED_PRODUCTS_SUCCESS'
export const FETCH_RECOMMED_PRODUCTS_FAIL = 'FETCH_RECOMMED_PRODUCTS_FAIL'

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMED_PRODUCTS_START
}

interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMED_PRODUCTS_SUCCESS,
  payload: any
}

interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMED_PRODUCTS_FAIL
  payload: any
}

export type RecommendProductActionTypes = FetchRecommendProductsStartAction | FetchRecommendProductsSuccessAction | FetchRecommendProductsFailAction

export const fetchRecommendProductsStartActionCreator = () : FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMED_PRODUCTS_START
  }
}

export const fetchRecommendProductsSuccessActionCreator = (data) : FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMED_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductsFailActionCreator = (error) : FetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMED_PRODUCTS_FAIL,
    payload: error
  }
}

export const getRecommendProductsListActionCreator = () : ThunkAction<void, RootState, undefined, RecommendProductActionTypes> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductsStartActionCreator())
  try {
    const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections')
    dispatch(fetchRecommendProductsSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchRecommendProductsFailActionCreator(error.message))
  }
}
// const middleware = (store) => (next) => (action) => {}
