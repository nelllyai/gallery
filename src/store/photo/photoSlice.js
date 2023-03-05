import {createSlice} from '@reduxjs/toolkit';
import {photoRequestAsync} from './photoAction';

const initialState = {
  loading: false,
  data: {},
  error: {},
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: {
    [photoRequestAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [photoRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = {};
    },
    [photoRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export default photoSlice.reducer;
