import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
       axios.defaults.headers.common.Authorization = `Bearer ${token}` 
    },
    remove() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const signUp = createAsyncThunk("auth/signUp", async (newUser, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/signup', newUser)
        token.set(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/login', userData)
        token.set(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/logout')
        token.remove()
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const current = createAsyncThunk("auth/current", async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const savedToken = state.auth.token
        if (!savedToken) return rejectWithValue()
        
        token.set(savedToken)
        const { data } = await axios.get('/users/current')
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})