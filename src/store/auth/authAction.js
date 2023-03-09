import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
import {deleteToken} from '../../utils/tokenStorage';

export const authRequestAsync = createAsyncThunk(
  'auth/get',
  (token) => axios(
    `${URL_API}/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({data}) => ({
      data,
    }))
    .catch(error => {
      deleteToken();
      return Promise.reject(error);
    })
);
