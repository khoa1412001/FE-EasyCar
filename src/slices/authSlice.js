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
        logoutSuccess: (state, action) => {
            state.accessToken = ''
   
        },
    }
})


export const {
    loginSuccess,
    logoutSuccess,
} = authSlice.actions

export default authSlice.reducer