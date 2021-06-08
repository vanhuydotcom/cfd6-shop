import { endpoint } from './config'
const ProductApi = {
    productItem() {
        return fetch(`${endpoint}/product`).then(res => res.json())
    },
    category() {
        return fetch(`${endpoint}/categories`).then(res => res.json())
    },

}
export default ProductApi