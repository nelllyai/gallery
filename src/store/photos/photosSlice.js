import {createSlice} from '@reduxjs/toolkit';
import {photosRequestAsync} from './photosAction';

const initialState = {
  loading: false,
  data: [],
  page: 0,
  error: {},
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [photosRequestAsync.pending.type]: state => {
      state.loading = true;
      state.error = {};
    },
    [photosRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.page = action.payload.page;
      state.error = {};
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
  }
});

export default photosSlice.reducer;
