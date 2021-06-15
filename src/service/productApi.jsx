import { endpoint } from './config'
const ProductApi = {
    productItem(page) {
        return fetch(`${endpoint}/product?${page}`).then(res => res.json())

    },
    categories() {
        return fetch(`${endpoint}/categories`).then(res => res.json())
    },
}
export default ProductApi