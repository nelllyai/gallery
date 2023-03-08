import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ACCESS_KEY, URL_API} from '../../api/const';

export const photosRequestAsync = createAsyncThunk(
  'photos/get',
  ({start, search}, {getState}) => {
    const token = getState().token.token;

    const prevPhotos = getState().photos.data;
    let currentSearch = getState().photos.search;
    let page = getState().photos.page + 1;

    if (start) page = 1;
    if (search) {
      page = 1;
      currentSearch = search;
    }

    return axios(
      `${URL_API}/${currentSearch ? `search/` : ''}` +
        `photos?page=${page}&per_page=30` +
        `${currentSearch ? `&query=${currentSearch}` : ''}`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then(({data}) => {
        if (currentSearch) {
          data = data.results;
        }

        data.splice(0, 6);

        if (page === 1) {
          return {
            data, search: currentSearch, page,
          };
        } else {
          return ({
            data: [...prevPhotos, ...data],
            search: currentSearch,
            page,
          });
        }
      })
      .catch(error => Promise.reject(error));
  }
);
