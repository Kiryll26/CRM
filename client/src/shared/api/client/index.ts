import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = 'http://localhost:5000/api'
const client = axios.create({ baseURL })

client.defaults.headers.common['Content-Type'] = 'application/json'
client.defaults.headers.common['Accept'] = 'application/json'

client.interceptors.request.use(async (config) => {
    const user = Cookies.get('logged_in')

    if (user) config.headers.Authorization = `Bearer ${user}`

    return config
})

client.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data
        return response
    },
    (err) => {
        throw err
    }
)

export default client
