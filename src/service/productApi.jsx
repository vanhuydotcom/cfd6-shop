import { endpoint } from './config'
const ProductApi = {
    productItem(page) {
        return fetch(`${endpoint}/product?${page}`).then(res => res.json())

    },

    categories() {
        return fetch(`${endpoint}/categories`).then(res => res.json())
    },
    productItemDetail(slug) {
        return fetch(`${endpoint}/product?slug=${slug}`).then(res => res.json())

    },
    //get data cho home page
    phoneRating() {
        return fetch(`${endpoint}/product?page=1&categories=1789&sort=rating_average.-1`).then(res => res.json())
    },
    sportRating() {
        return fetch(`${endpoint}/product?page=1&categories=1975&sort=rating_average.-1`).then(res => res.json())
    },
    consumerRating() {
        return fetch(`${endpoint}/product?page=1&categories=4384&sort=rating_average.-1`).then(res => res.json())
    },
}
export default ProductApi