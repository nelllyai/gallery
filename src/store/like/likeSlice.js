import {createSlice} from '@reduxjs/toolkit';
import {likePostAsync, likeDeleteAsync} from './likeAction';

const initialState = {
  loading: false,
  liked: false,
  likes: 0,
  error: {},
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers: {
    [likePostAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [likeDeleteAsync.pending.type]: state => {
      state.error = {};
    },
    [likePostAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.liked = action.payload.liked;
      state.likes = action.payload.likes;
      state.error = {};
    },
    [likeDeleteAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.liked = action.payload.liked;
      state.likes = action.payload.likes;
      state.error = {};
    },
    [likePostAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [likeDeleteAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export default likeSlice.reducer;
