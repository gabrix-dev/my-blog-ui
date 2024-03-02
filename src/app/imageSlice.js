import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isImageCached: false,
};

// Slice
const imageCacheSlice = createSlice({
    name: 'imageCache',
    initialState,
    reducers: {
        setImageCached: (state) => {
            state.isImageCached = true;
        },
    },
});

// Actions
export const { setImageCached } = imageCacheSlice.actions;

// Reducer
export default imageCacheSlice.reducer;
