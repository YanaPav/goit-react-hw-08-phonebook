import { createSlice } from "@reduxjs/toolkit";
import {signUp, login, logout, current} from './authOperations'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {name: null, email: null},
        token: null,
        loading: false,
        isLoggedIn: false,
        error: null
    },
    extraReducers: {
        [signUp.pending](state) {
            state.loading = 'signUp'
            state.error = null
        },
        [signUp.fulfilled](state, { payload }) {
            state.loading = false
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        },  
        [signUp.rejected](state, { payload }) {
            state.loading = false
            state.error = {type: 'signUp', message: payload}

        },
        
        [login.pending]: (store) => {
            store.loading = 'login';
            store.error = null;
        },
        [login.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLoggedIn = true;
        },
        [login.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = {type: 'login', message: payload};
        },

        [logout.pending]: (store) => {
            store.loading = 'logout';
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.user = null;
            store.token = null;
            store.isLoggedIn = false;
        },
        [logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = {type: 'logout', message: payload};
        },

        [current.pending]: (store) => {
            store.loading = 'current';
            store.error = null;
        },
        [current.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = payload;
            store.isLoggedIn = true;
        },
        [current.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = {type: 'current', message: payload};
        },
    }
})

export const authReducer =  authSlice.reducer;