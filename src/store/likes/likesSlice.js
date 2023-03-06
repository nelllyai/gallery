import {createSlice} from '@reduxjs/toolkit';
import {likesPostAsync, likesDeleteAsync} from './likesAction';

const initialState = {
  loading: false,
  liked: false,
  likes: 0,
  error: {},
};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: {
    [likesPostAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [likesDeleteAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [likesPostAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.liked = action.payload.liked;
      state.likes = action.payload.likes;
      state.error = {};
    },
    [likesDeleteAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.liked = action.payload.liked;
      state.likes = action.payload.likes;
      state.error = {};
    },
    [likesPostAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [likesDeleteAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export default likesSlice.reducer;
