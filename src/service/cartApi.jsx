import Api from '../core/Api'
const cartApi = {
    order: (data) => {
        return Api.token().post('/ecommerce/v1/order', data)
    }
}
export default cartApi;