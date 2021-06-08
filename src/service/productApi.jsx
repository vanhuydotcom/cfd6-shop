import { endpoint } from './config'
const ProductApi = {
    ProductItem() {
        return fetch(`${endpoint}/product`, {
            method: 'GET',

        }).then(res => res.json())
    }
}
export default ProductApi