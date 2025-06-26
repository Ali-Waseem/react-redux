
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            console.log('User logged in');
            state.isAuthenticated = true;
        },
        logout(state) {
            console.log('User logged out');
            state.isAuthenticated = false;
        }
    }
})

export default authSlice;