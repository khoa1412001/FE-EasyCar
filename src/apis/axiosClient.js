import axios from 'axios';
import queryString from 'query-string';
import jwt_decode from 'jwt-decode';
const baseURL='http://localhost:5000/api'

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params)
});

export const axiosClientWithToken = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params)
});

var myInterceptor = null;
export const axiosInstance = (accessToken,refreshToken, dispatch, stateSuccess,stateFail) => {
    axiosClientWithToken.interceptors.request.eject(myInterceptor)
    myInterceptor = axiosClientWithToken.interceptors.request.use(
        async (config) => {
            let date = new Date();
            if(!(refreshToken)){
                return config;
            }
            const decodeToken = jwt_decode(accessToken);
            
            if (decodeToken.exp < date.getTime() / 1000) {
                try{
                    const response = await getRefreshToken(refreshToken);

                    const newToken = {
                        accessToken: response.accessToken,
                        refreshToken: response.refreshToken
                    }
                    dispatch(stateSuccess(newToken))
                    config.headers['Authorization'] = `Bearer ${response.accessToken}`;
                }
                catch(err){
                    dispatch(stateFail(null))
                }
            }else{
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        },
        err => {
            return Promise.reject(err)
        }
    );
}