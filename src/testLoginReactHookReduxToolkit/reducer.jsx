import { createSlice } from '@reduxjs/toolkit';

import { NAME } from './constants';

const initialState = {
    initialValues: {
        email: '',
        password: '',
    },
    session: {
        errors: null,
        isLoading: false,
    },
};

export const slice = createSlice({
    initialState,
    name: NAME,
    reducers: {
        loginUser: (state) => {
            state.session.isLoading = true;
        },
        loginUserFailure: (state, action) => {
            state.session.isLoading = false;
            state.session.errors = action.payload;
        },
        loginUserSuccess: (state) => {
            state.session.isLoading = false;
        },
    },
});

export const { loginUser, loginUserFailure, loginUserSuccess } = slice.actions;
export default slice.reducer;
