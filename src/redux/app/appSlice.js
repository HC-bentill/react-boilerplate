import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    error: false,
    config:{}
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setAppLoading } = appSlice.actions;
export default appSlice.reducer;