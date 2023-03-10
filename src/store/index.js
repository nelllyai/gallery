import {configureStore} from '@reduxjs/toolkit';
import tokenReducer from './token/tokenSlice';
import authReducer from './auth/authSlice';
import photosReducer from './photos/photosSlice';
import photoReducer from './photo/photoSlice';
import likesReducer from './likes/likesSlice';
import collectionReducer from './collection/collectionSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
    photo: photoReducer,
    likes: likesReducer,
    collection: collectionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(),
});
