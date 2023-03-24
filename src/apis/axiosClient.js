import axios from 'axios';
import { parse, stringify } from 'qs';
const baseURL='http://localhost:5000/api';
// const baseURL='https://be-easycar.vercel.app/api';
export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
      },
});

const getRefreshToken = async (refreshToken) => {
    const res = await axiosClient.post('/auth/refreshtoken', { refreshToken  })
    return res.data
}

export const axiosClientWithTokenMultiPart = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
});

export const axiosClientWithToken = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
      },
});

var myInterceptor = null;
export const axiosInstance = (accessToken, dispatch) => {
    axiosClientWithToken.interceptors.request.eject(myInterceptor)
    myInterceptor = axiosClientWithToken.interceptors.request.use(
        async (config) => {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            return config;
        },
        err => {
            return Promise.reject(err)
        }
    );
}

var myInterceptorMultiPart = null;
export const axiosInstanceMultiPart = (accessToken) => {
    axiosClientWithTokenMultiPart.interceptors.request.eject(myInterceptorMultiPart)
    myInterceptorMultiPart = axiosClientWithTokenMultiPart.interceptors.request.use(
        async (config) => {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            return config;
        },
        err => {
            return Promise.reject(err)
        }
    );
}