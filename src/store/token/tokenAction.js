/* eslint-disable arrow-body-style */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urlToken} from '../../api/auth';
import {ACCESS_KEY} from '../../api/const';
import {setToken} from '../../utils/tokenStorage';

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
      .then(({data}) => {
        const token = data['access_token'];
        setToken(token);

        return {token};
      })
      .catch(error => Promise.reject(error));
  }
);
