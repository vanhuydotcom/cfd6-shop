import { PRODUCT } from './../type'
const inititalState = {
    product: [],
    paginate: null
}
export function productReducer(state = inititalState, action) {
    switch (action.type) {
        case PRODUCT:
            return {
                ...state,
                product: action.payload.data,
                paginate: action.payload.paginate
            }
        default:
            return state
    }
}