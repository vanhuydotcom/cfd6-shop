import { ADD_CART } from "../type";

export default function addCart(cart) {
    return {
        type: ADD_CART,
        payload: cart
    }
}