import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
import { parse, stringify } from 'qs';
import storage from 'redux-persist/lib/storage';
const baseURL='http://localhost:5000/api';

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

const getAccessToken = () => {
    const jsonobject = JSON.parse(localStorage.getItem('persist:root'))
    const auth = JSON.parse(jsonobject.auth)
    const accessToken = auth.accessToken.toString()
    return accessToken
};

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
