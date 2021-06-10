import { PRODUCT } from './../type'
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
