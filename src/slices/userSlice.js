import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        info:null,
    },
    reducers: {
        setUserInfo:(state,action)=>{
            state.info = action.payload
        },
        clearUserInfo:(state,action)=>{
            state.info = null
        },
        updateAvatar:(state,action) =>{
            state.info = {
                ...state.info,
                avatar:action.payload
            }
        },
    
    }
})


export const {
    setUserInfo,
    clearUserInfo,
    updateAvatar
} = userSlice.actions

export default userSlice.reducer