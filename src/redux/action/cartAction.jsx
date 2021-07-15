import { useLayoutEffect } from "react";
import cartApi from "../../service/cartApi";
import { ADD_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, INCREASE_ITEM_CART, ADD_MORE_CART, ORDER_COMPLETED, GET_CART, UPDATE_CART } from "../type";

// export function getCart() {
//     return async (dispatch) => {
//         let res = await cartApi.getCartFromUser()
//         if (res) {
//             dispatch({
//                 type: GET_CART,
//                 payload: res
//             })
//             console.log(res);
//         }
//     }
// };  
// export function updateCart(data) {
//     return async (dispatch) => {
//         let res = await cartApi.update(data)
//         if (res) {
//             dispatch({
//                 type: UPDATE_CART,
//                 payload: res
//             })
//         }
//         console.log(res);
//     }
// };
export function addCart(cart) {
    return async (dispatch) => {
        let res = await cartApi.create(cart)
        if (res) {
            dispatch({
                type: ADD_CART,
                payload: cart
            })
            console.log(cart);
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