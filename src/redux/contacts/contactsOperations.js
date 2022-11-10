import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetch = createAsyncThunk("contacts/fetch", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/contacts')
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const add = createAsyncThunk("contacts/add", async (newContact, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/contacts', newContact)
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const remove = createAsyncThunk("contacts/remove", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})

export const edit = createAsyncThunk("contacts/edit", async (updatedContact, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/contacts/${updatedContact.id}`, updatedContact.body)
        return data
    } catch (error) {
        return rejectWithValue(error)                        
    }
})