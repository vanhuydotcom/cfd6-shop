import { endpoint } from './config'
const UserApi = {
    async refreshToken() {
        let refreshToken = JSON.parse(localStorage.getItem("login"))?.token?.refreshToken
        let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken: refreshToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        if (res?.data?.accessToken) {
            localStorage.setItem('token', JSON.stringify(res.data))
        }
        return true;
    },
    async updateProfile(data) {
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken
        let res = await fetch(`${endpoint}/update-profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`

            }
        })
        if (res.status === 200) {
            return res.json()
        }
        if (res.status === 403) {
            await UserApi.refreshToken()
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken
            return fetch(`${endpoint}/update-profile`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`

                }
            }).then(res => res.json())
        }
        console.log(token.accessToken);

    }
}
export default UserApi