import Api from '../core/Api'
const userApi = {
    async update(data) {
        return Api.token().post('/update-profile', data)
    }
}
export default userApi;