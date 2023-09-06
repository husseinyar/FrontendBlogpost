// import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import {BASE_URL} from "../../helper"
// import axios from 'axios';

// const intialState ={
//     loading: false,
//     user: [],
//     error: "",
// }


// export const fetchUser = createAsyncThunk('user/fetchUser', ()=> {
 
//     return axios
//     .get(`${BASE_URL}/users/${userId}`)
//     .then((response)=> response.data.map((user)=> user.userId))

// })

// const userSlice = createSlice({
//     user: null,
//     token: null,
//     intialState, 

//     extraReducers:(builder)=>{
//         builder.addCase(fetchUser.pending, (state)=> {
//             state.loading= true;
//         })
//     }
// })