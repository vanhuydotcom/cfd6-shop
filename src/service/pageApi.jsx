import { endpoint } from './config'
const PageApi = {
    FaqApi() {
        return fetch(`${endpoint}/faq`, {
            method: 'GET',

        }).then(res => res.json())
    },
    ContactApi() {
        return fetch(`${endpoint}/contact`, {
            method: 'GET',

        }).then(res => res.json())
    },
    StoreApi() {
        return fetch(`${endpoint}/store`, {
            method: 'GET',
        }).then(res => res.json())
    }
}
export default PageApi