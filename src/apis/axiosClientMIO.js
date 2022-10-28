import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
import { parse, stringify } from 'qs';
import storage from 'redux-persist/lib/storage';
const baseURL='https://m-common.mioto.vn/lbs/search-address?sdkMap=2&address=';

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
    },
    withCredentials: true,
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
      },
});