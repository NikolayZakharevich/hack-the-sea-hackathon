import 'whatwg-fetch'
import queryString from 'query-string'
import config from '../config'

export const requestParams = httpMethod => ({
    'method': httpMethod.toUpperCase(),
    'mode': 'cors',
    'cache': 'no-cache',
    'credentials': 'same-origin',
    'headers': {},
    'redirect': 'follow',
    'referrer': 'no-referrer'
});

export default class Backend {
    static request(method, params, httpMethod = 'GET') {
        let url = config.api_basepath + method
        const reqParams = requestParams(httpMethod)

        if (httpMethod.toString().toUpperCase() !== 'GET') {
            if (!(params instanceof FormData)) {
                reqParams['headers']['Content-Type'] = 'application/json'
            }
            reqParams['body'] = params instanceof FormData ? params : JSON.stringify(params)
        } else {
            url += `?${queryString.stringify(params)}`;
        }

        return fetch(url, reqParams)
            .then(r => r.json())
            .then(data => {
                if (data.response !== undefined) {
                    return data
                } else if (data.error && data.error.message !== undefined) {
                    return data.error
                } else {
                    return data
                }
            })
            .catch((e) => {
                console.log(e)
                return Promise.reject(e);
            })
    }
}
