import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/get',
  (args, {getState}) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/photos?per_page=30`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then(({data}) => ({
        data,
      }))
      .catch(error => Promise.reject(error));
  }
);
