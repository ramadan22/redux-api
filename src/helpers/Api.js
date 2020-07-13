import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://128.199.125.236/web-products/webproducts-gateway/public/api/show/pos'
})