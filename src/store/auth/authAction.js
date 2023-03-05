import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const authRequestAsync = createAsyncThunk(
  'auth/get',
  (args, {getState}) => {
    const token = getState().token.token;

    return axios(
      `${URL_API}/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => ({
        data,
      }))
      .catch(error => Promise.reject(error));
  }
);
