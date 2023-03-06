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
      state.page++;
      state.error = {};
    },
    [photosRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = {};
    },
    [photosRequestAsync.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
  }
});

export default photosSlice.reducer;
