import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photoRequestAsync = createAsyncThunk(
  'photo/get',
  (id, {getState}) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/photos/${id}`,
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
