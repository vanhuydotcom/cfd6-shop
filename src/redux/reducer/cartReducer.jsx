import { ADD_CART } from "../type";
let cart = JSON.parse(localStorage.getItem('cart')) || []
const initialSate = {
    list: cart?.list || [],
    num: cart?.num || 0,
    // amount : cart?.amount || 0
}
const onCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart
}
export default function cartReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_CART:
            let { list, num } = state;
            let index = list.findIndex((e) => e._id === action.payload._id)
            let cartNum = action.payload.cartNum || 1
            if (index !== -1) {
                list[index].cartNum += cartNum
            } else {
                let item = JSON.parse(JSON.stringify(action.payload))
                item.cartNum = cartNum
                list.push(item)
            }
            num = list.reduce((accumulator, currentValue) => accumulator + currentValue.cartNum, 0)
            return onCart({
                ...state,
                list,
                num
            })
        default:
            return state
    }
}