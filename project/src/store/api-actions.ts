import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import { AppDispatch, Offer, RoomComment, RoomReview, State } from '../types/offers-list';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dataProcess } from './data-process/data-process';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/clearError',
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(dataProcess.actions.setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearOffers',
  async (_arg, { extra: api}) => {

    const {data} = await api.get<Offer[]>(`/hotels/${_arg}/nearby`);
    return data;

  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffer',
  async (_arg, { extra: api}) => {

    const {data} = await api.get<Offer>(`/hotels/${_arg}`);
    return data;

  },
);

export const fetchCommentsAction = createAsyncThunk<RoomComment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchComments',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<RoomComment[]>(`/comments/${_arg}`);
    return data;
  },
);

export const addCommentAction = createAsyncThunk<RoomComment[], RoomReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'form/addComment',
  async ({rating, review, hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.post<RoomComment[]>(`/comments/${hotelId}`, {'rating':rating, 'comment':review});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData | null, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    }
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data, data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
    },
  );
