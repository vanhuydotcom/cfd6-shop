import { CATEGORIES, PRODUCT, PRODUCT_DETAIL } from './../type'
import ProductApi from '../../service/productApi'
export function productAction(page) {
    return async (dispatch) => {
        let res = await ProductApi.productItem(page);
        if (res) {
            dispatch({
                type: PRODUCT,
                payload: res,
            })
        }
    }
}
export function categoriesAction() {
    return async (dispatch) => {
        let res = await ProductApi.categories();
        if (res) {
            dispatch({
                type: CATEGORIES,
                payload: res,
            })
        }
    }
}
//get data cho home page
export function phoneRating() {
    return async (dispatch) => {
        let res = await ProductApi.phoneRating();
        if (res) {
            dispatch({
                type: "TOP_PHONE",
                payload: res,
            })
        }
    }
}
export function sportRating() {
    return async (dispatch) => {
        let res = await ProductApi.sportRating();
        if (res) {
            dispatch({
                type: "TOP_SPORT",
                payload: res,
            })
        }
    }
}
export function consumerRating() {
    return async (dispatch) => {
        let res = await ProductApi.consumerRating();
        if (res) {
            dispatch({
                type: "TOP_CONSUMER",
                payload: res,
            })
        }
    }
}