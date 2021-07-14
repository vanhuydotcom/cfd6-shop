import { CATEGORIES, CATEGORIES_TITLE, LOADING, PRODUCT, PRODUCT_DETAIL } from './../type'
const initialState = {
    product: [],
    product_detail: [],
    paginate: null,
    categories: JSON.parse(localStorage.getItem('categories')) || [],
    categories_title: '',
    loading: false,
    //get data cho home page
    phone_rating: [],
    sport_rating: [],
    consumerRating: []
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
        case PRODUCT_DETAIL:
            return {
                ...state,
                product_detail: action.payload.data
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
        //SET DATA CHO HOME PAGE
        case 'TOP_PHONE':
            return {
                ...state,
                phone_rating: action.payload.data
            }
        case 'TOP_SPORT':
            return {
                ...state,
                sport_rating: action.payload.data
            }
        case 'TOP_CONSUMER':
            return {
                ...state,
                consumer_rating: action.payload.data
            }
        default:
            return state
    }


}
