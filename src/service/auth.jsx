import { endpoint } from './config'
const Auth = {
    login(data) {
        return fetch(`${endpoint}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    register(data) {
        return fetch(`${endpoint}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
}
export default Auth
