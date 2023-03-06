import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const likePostAsync = createAsyncThunk(
  'like/post',
  (id, {getState}) => {
    const token = getState().token.token;

    return axios.post(
      `${URL_API}/photos/${id}/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => ({
        liked: data.photo.liked,
        likes: data.photo.likes,
      }))
      .catch(error => Promise.reject(error));
  }
);

export const likeDeleteAsync = createAsyncThunk(
  'like/delete',
  (id, {getState}) => {
    const token = getState().token.token;

    return axios.delete(
      `${URL_API}/photos/${id}/like`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => ({
        liked: data.photo.liked,
        likes: data.photo.likes,
      }))
      .catch(error => Promise.reject(error));
  }
);
