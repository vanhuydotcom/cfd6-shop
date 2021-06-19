import Api from '../core/Api';
import { endpoint } from './config'
const Auth = {
    login: (data) => {
        return Api.post("/login", data);
    },
    register: (data) => {
        return Api.post("/register", data);
    },
}
export default Auth
