import cartApi from "../../service/cartApi";
import { ADD_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, INCREASE_ITEM_CART, ADD_MORE_CART, ORDER_COMPLETED } from "../type";

export function addCart(cart) {
    return async (dispatch) => {
        let res = await cartApi.create(cart)
        if (res) {
            dispatch({
                type: ADD_CART,
                payload: cart
            })
        }
    }


};
export function delItemCart(id) {
    return {
        type: DEL_ITEM_CART,
        payload: id
    }
};
export function decreaseItemCart(data) {
    return {
        type: DECREASE_ITEM_CART,
        payload: data
    }
}
export function increaseItemCart(data) {
    return {
        type: INCREASE_ITEM_CART,
        payload: data
    }
}
export function addMoreCard(data) {
    return {
        type: ADD_MORE_CART,
        payload: data
    }
}
/*order*/
export function orderAction(cart) {
    return async (dispatch) => {
        let res = await cartApi.order(cart)
        if (res) {
            dispatch({
                type: ORDER_COMPLETED,
                payload: cart
            })
        }
    }
}