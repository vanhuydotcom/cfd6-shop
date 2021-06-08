import { endpoint } from './config'
const ProductApi = {
    productItem(data) {
        return fetch(`${endpoint}/product`, {
            method: 'GET',

        }).then(res => res.json())
    }
}
export default ProductApi