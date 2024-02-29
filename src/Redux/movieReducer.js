import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: [],
    original: [],
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.current = action.payload;
        },
        retainOriginal: (state, action) => {
            state.original = action.payload;
        },
    },
});

export const { setMovies, retainOriginal } = movieSlice.actions;
export default movieSlice.reducer;