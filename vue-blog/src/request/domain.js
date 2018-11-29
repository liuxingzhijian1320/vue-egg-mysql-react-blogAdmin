var baseUrl = '';
if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api'
} else {
    baseUrl = ''
}
export default baseUrl