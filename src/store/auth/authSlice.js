import {createSlice} from '@reduxjs/toolkit';
import {authRequestAsync} from './authAction';

const initialState = {
  loading: false,
  data: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authRequestAsync.pending.type]: state => {
      state.error = {};
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.error = {};
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  }
});

export default authSlice.reducer;
