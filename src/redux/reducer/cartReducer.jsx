import { ADD_CART, ADD_MORE_CART, DECREASE_ITEM_CART, DEL_ITEM_CART, INCREASE_ITEM_CART } from "../type";
let cart = JSON.parse(localStorage.getItem('cart')) || []
const initialSate = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0
}
const onCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart
}
export default function cartReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_CART:
            {
                let { list, num, amount } = state;
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
                amount = list.reduce((accumulator, currentValue) => accumulator + currentValue.real_price * currentValue.cartNum, 0)
                return onCart({
                    ...state,
                    list,
                    num,
                    amount
                })
            };
        case DEL_ITEM_CART: {
            let { list, num, amount } = state
            let index = list.findIndex(e => e._id === action.payload)
            if (index !== -1) {
                num -= list[index].cartNum
                amount -= list[index].cartNum * list[index].real_price
                list.splice(index, 1)
                // let a = list[index]
                // console.log(a);
                // list.filter(item => item !== a)
            }
            return onCart({
                ...state,
                list,
                num,
                amount
            })
        };
        case DECREASE_ITEM_CART: {
            let { list, num, amount } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            if (index !== -1) {
                num -= 1
                amount -= list[index].real_price
                if (list[index].cartNum > 1) {
                    list[index].cartNum -= 1
                } else {
                    list.splice(index, 1)
                }
            }
            return onCart({
                ...state,
                list,
                num,
                amount
            })
        };
        case INCREASE_ITEM_CART: {
            let { list, num, amount } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            if (index !== -1) {
                list[index].cartNum += 1
                num += 1
                amount += list[index].real_price
            }
            return onCart({
                ...state,
                list,
                num,
                amount
            })
        };
        case ADD_MORE_CART: {
            let { list, num, amount } = state
            let index = list.findIndex(e => e._id === action.payload._id)
            num -= list[index].cartNum
            if (index !== -1) {
                list[index].cartNum = action.payload.inputNumber
            }
            num += action.payload.inputNumber
            return onCart({
                ...state,
                list,
                num
            },
            )



        };

        default:
            return state
    }
}