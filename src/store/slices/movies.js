import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  popular: null,
  trending:null
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    SET_POPULAR_MOVIES: (state, {payload}) => {
      state.popular = payload;
    },
    SET_TRENDING_MOVIES: (state, {payload}) => {
      state.trending = payload;
    },
  },
});
const {actions, reducer} = moviesSlice;
export const {SET_POPULAR_MOVIES,SET_TRENDING_MOVIES} = actions;
export default reducer;
