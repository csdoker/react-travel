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