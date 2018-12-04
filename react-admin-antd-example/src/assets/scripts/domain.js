var baseUrl = '';
if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api/admin'
} else {
    baseUrl = '/admin'
}
export default baseUrl