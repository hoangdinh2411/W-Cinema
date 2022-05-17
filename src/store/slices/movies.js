import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  popular: null,
  trending:{
    day:null,
    week: null
  }
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    SET_POPULAR_MOVIES: (state, {payload}) => {
      state.popular = payload;
    },
    SET_TRENDING_FOR_THE_DAY_MOVIES: (state, {payload}) => {
      state.trending.day = payload;
    },
    SET_TRENDING_FOR_THE_WEEK_MOVIES: (state, {payload}) => {
      state.trending.week = payload;
    },
  },
});
const {actions, reducer} = moviesSlice;
export const {SET_POPULAR_MOVIES,SET_TRENDING_FOR_THE_DAY_MOVIES,SET_TRENDING_FOR_THE_WEEK_MOVIES} = actions;
export default reducer;
