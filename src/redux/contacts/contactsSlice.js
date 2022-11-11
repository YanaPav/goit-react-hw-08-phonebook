import { createSlice } from "@reduxjs/toolkit";
import { fetch, add, remove, edit } from './contactsOperations'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: null,
        loading: false,
        error: null,
        editing: false
    },
    extraReducers: {
        [fetch.pending](state) {
            state.loading = 'fetch'
            state.error = null
        },
        [fetch.fulfilled](state, { payload }) {
            state.loading = false
            state.items = payload
        },  
        [fetch.rejected](state, { payload }) {
            state.loading = false
            state.error = {type: 'fetch', message: payload.message}

        },

        [add.pending](state) {
            state.loading = 'add'
            state.error = null
        },
        [add.fulfilled](state, { payload }) {
            state.loading = false
            state.items.push(payload)
        },  
        [add.rejected](state, { payload }) {
            state.loading = false
            state.error = {type: 'add', message: payload.message}

        },

        [remove.pending](state, action) {
            state.loading = action.meta.arg
            state.error = null
        },
        [remove.fulfilled](state, { payload }) {
            state.loading = false
            state.items = state.items.filter(contact => contact.id !== payload.id)
        },  
        [remove.rejected](state, action) {
            state.loading = false
            state.error = {id: action.meta.arg, message: action.payload.message}

        },

        [edit.pending](state) {
            state.loading = 'edit'
            state.error = null
        },
        [edit.fulfilled](state, { payload }) {
            state.loading = false
            state.items = state.items.map(contact => {
                if (contact.id === payload.id) {
                    return payload
                }
                return contact
            })
        },  
        [edit.rejected](state, { payload }) {
            state.loading = false
            state.error = {type: 'edit', message: payload.message}

        },
    }
})

export const contactsReducer =  contactsSlice.reducer;