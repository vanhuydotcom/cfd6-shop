import { CREATE_CART, ADD_MORE_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, INCREASE_ITEM_CART, ORDER_COMPLETED } from "../type";
let initialSate = {
    cart: [],
}
export default function cart(state = initialSate, action) {
    switch (action.type) {
        case CREATE_CART: {
            return {
                ...state,
                cart: action.payload.data
            }
        }
        default:
            return state
    }
}