import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const collectionRequestAsync = createAsyncThunk(
  'collection/get',
  (username) => axios(
    `${URL_API}/users/${username}/likes?per_page=30`,
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
