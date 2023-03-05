/* eslint-disable arrow-body-style */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlToken} from '../../api/auth';
import {ACCESS_KEY} from '../../api/const';

export const tokenRequestAsync = createAsyncThunk(
  'token/set',
  (code) => {
    return axios.post(
      `${urlToken}&code=${code}`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then(({data}) => ({
        token: data['access_token'],
      }))
      .catch(error => Promise.reject(error));
  }
);
