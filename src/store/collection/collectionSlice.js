import {createSlice} from '@reduxjs/toolkit';
import {collectionRequestAsync} from './collectionAction';

const initialState = {
  loading: false,
  data: [],
  error: {},
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: {
    [collectionRequestAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [collectionRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = {};
    },
    [collectionRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export default collectionSlice.reducer;
