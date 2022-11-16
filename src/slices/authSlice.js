import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken:'',
    
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.accessToken = action.payload.accesstoken
        },
        logingoogleSucess: (state, action) => {
            state.accessToken = action.payload.access_token
        },
        logoutSuccess: (state, action) => {
            state.accessToken = ''
   
        },
    }
})


export const {
    loginSuccess,
    logoutSuccess,
    logingoogleSucess,
} = authSlice.actions

export default authSlice.reducer