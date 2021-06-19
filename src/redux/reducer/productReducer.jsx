import { CATEGORIES, CATEGORIES_TITLE, LOADING, PRODUCT } from './../type'
const initialState = {
    product: [],
    paginate: null,
    categories: JSON.parse(localStorage.getItem('categories')) || [],
    categories_title: '',
    loading: false,

}
export function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT:
            return {
                ...state,
                product: action.payload.data,
                paginate: action.payload.paginate,
                loading: false

            }
        case CATEGORIES:
            localStorage.setItem('categories', JSON.stringify(action.payload))
            return {
                ...state,
                categories: action.payload,
            }
        case CATEGORIES_TITLE:
            return {
                ...state,
                categories_title: action.payload.title
            }
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }


}