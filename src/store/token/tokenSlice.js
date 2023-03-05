import {createSlice} from '@reduxjs/toolkit';
import {tokenRequestAsync} from './tokenAction';

const initialState = {
  token: '',
  error: {},
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: {
    [tokenRequestAsync.pending.type]: state => {
      state.error = {};
    },
    [tokenRequestAsync.fulfilled.type]: (state, action) => {
      state.token = action.payload.token;
      state.error = {};
    },
    [tokenRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  }
});

export default tokenSlice.reducer;
