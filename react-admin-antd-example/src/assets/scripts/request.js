import axios from 'axios';
// import { Loading, Message } from 'element-ui';
// import { message } from 'antd';


import baseUrl from './domain'
var loadingInstance;


// axios 实例
const service = axios.create({
    baseURL: baseUrl,
    // baseURL: process.env.BASE_API,
    timeout: 5000, // 超时
});

// request interceptor
service.interceptors.request.use(
    config => {
        // config.headers['Authorization'] = store.state.user.token; // token
        // config.headers['Halo-App'] = 'board';
        return config;
    },
    error => {
        console.error(error); // for debug
        Promise.reject(error);
    }
);

// respone interceptor
service.interceptors.response.use(
    response => {
        // 此处可以根据状态吗可以做一些逻辑处理
        const { data, config: { isLoading } } = response;
        console.info('response', response)

        if (isLoading) loadingInstance.close(); // loading

        if (data.code != 0) {
            // Message({
            //     type: 'error',
            //     message: data.msg
            // });
            throw new Error(data.msg);
        } else {
            // console.info('response.data', response.data)
            return response.data;
        }
    },
    error => {
        const { config = {} } = error.response || {};
        // const { isLoading = true } = config;
        // if (isLoading) {
        //     loadingInstance.close()
        // }
        return Promise.reject(error);
    }
);

/**
 * data axios参数
 * @type {{url: string, data: any, params: object, methods: string}}
 */
export default (data, { isLoading = true } = {}) => {
    // data.isLoading = isLoading;
    // if (isLoading) loadingInstance = Loading.service(); // 显示loading
    return service(data);
};