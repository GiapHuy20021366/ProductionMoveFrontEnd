
import { userLogout, userIsLogin } from '../store/slices/userSlices';
import axios from '../axios'
import { store } from '../store/store';
import { getItem } from './localStorageUntils';

export const updateToken = async () => {
    if (localStorage.authenticate) {
        const authenticate = JSON.parse(localStorage.authenticate)
        if (Date.now() < authenticate.expired - 30 * 60 * 1000) {
            store.dispatch(userIsLogin({
                token: authenticate.token,
                account: getItem('accountInformation')
            }))
            return authenticate.token
        }
        if (Date.now() > authenticate.expired - 30 * 60 * 1000 && Date.now() < authenticate.expired) {
            const responseMessage = await axios.get(
                'api/refresh-token',
                { headers: { Authorization: authenticate.token } }
            ).then((message) => {
                storeAuthentication(message.data.token)
            }).catch((err) => {
                store.dispatch(userLogout())
            })
            if (responseMessage) {
                return responseMessage.data.token
            }
        }
        if (Date.now() >= authenticate.expired) {
            store.dispatch(userLogout())
        }
    } else {
        store.dispatch(userLogout())
    }
}

export const storeAuthentication = (token) => {
    const authenticate = {
        token: token,
        expired: Date.now() + 1 * 60 * 60 * 1000
    }
    localStorage.setItem('authenticate', JSON.stringify(authenticate))
    return authenticate
}