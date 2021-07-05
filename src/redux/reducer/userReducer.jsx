import { ADD_WISHLIST } from "../type";

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

let initState = {
    list: wishlist?.list || [],
}
export default function userReducer(state = initState, action) {
    switch (action.type) {
        case ADD_WISHLIST: {
            let { list } = state
            let index = list.findIndex((e) => e._id === action.payload._id)
            console.log(index);
            localStorage.setItem(JSON.stringify)
            return {
                ...state,
                list
            }
        }
        default:
            return state
    }
}