import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/get',
  (page, {getState}) => {
    const token = getState().token.token;
    const prevPhotos = getState().photos.data;

    return axios(
      `${URL_API}/photos?page=${page}&per_page=30`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then(({data}) => ({
        data: [...prevPhotos, ...data],
      }))
      .catch(error => Promise.reject(error));
  }
);
