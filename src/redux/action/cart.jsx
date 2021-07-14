import cartApi from "../../service/cartApi";
import { CREATE_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, INCREASE_ITEM_CART, ADD_MORE_CART, ORDER_COMPLETED } from "../type";

export function createCart(data) {
    return async (dispatch) => {
        let res = await cartApi.create(data)
        if (res.data) {
            dispatch({
                type: CREATE_CART,
                payload: res.data
            })
            console.log(res);
        }
    }
}
