var baseUrl = '';
if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api/blog'
} else {
    baseUrl = '/blog'
}
export default baseUrl