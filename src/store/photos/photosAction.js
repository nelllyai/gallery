import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/get',
  () => axios(
    `${URL_API}/photos?per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    })
    .then(({data}) => ({
      data,
    }))
    .catch(error => Promise.reject(error))
);
