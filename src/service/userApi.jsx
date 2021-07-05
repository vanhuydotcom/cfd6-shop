import Api from '../core/Api'
const userApi = {
    update: (data) => {
        return Api.token().post('/update-profile', data)
    },
    getWishlist: (data) => {
        return Api.token().post('/ecommerce/v1/profile/wishlist', data)
    },
}
export default userApi;