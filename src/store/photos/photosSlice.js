import {createSlice} from '@reduxjs/toolkit';
import {photosRequestAsync} from './photosAction';

const initialState = {
  data: [],
  search: '',
  page: 0,
  error: {},
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [photosRequestAsync.pending.type]: state => {
      state.error = {};
    },
    [photosRequestAsync.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.search = action.payload.search;
      state.page = action.payload.page;
      state.error = {};
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
    },
  }
});

export default photosSlice.reducer;
