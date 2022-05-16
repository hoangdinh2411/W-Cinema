import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    SET_GENRES: (state,{payload}) => {
      state.list = payload;
    },
  },
});
const {actions, reducer} = genresSlice;
export const {SET_GENRES} = actions;
export default reducer;
