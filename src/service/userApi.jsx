import Api from '../core/Api'
const useApi = {
    async update(data) {
        return Api.token().post('/update-profile', data)
    }
}
export default useApi;