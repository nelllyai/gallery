import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/get',
  (start, {getState}) => {
    const token = getState().token.token;

    // const prevPhotos = getState().photos.data;
    let page = getState().photos.page + 1;

    if (start) page = 1;

    return axios(
      `${URL_API}/photos?page=${page}&per_page=30&order_by=popular`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then(({data}) => {
        data.splice(0, 6);
        return {data, page};

        // if (page === 1) {
        //   console.log(prevPhotos);
        //   console.log(data);
        //   return {
        //     data, page
        //   };
        // } else {
        //   return ({
        //     data: [...prevPhotos, ...data],
        //     page
        //   });
        // }
      })
      .catch(error => Promise.reject(error));
  }
);
