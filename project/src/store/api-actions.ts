import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffer, loadOffers, redirectToRoute, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData, unsetUserData} from './action';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import { AppDispatch, Offer, State } from '../types/offers-list';
import { store } from '.';
import { AppRoute, AuthorizationStatus } from '../components/const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    // dispatch(setOfferDataLoadingStatus(true));


    const {data} = await api.get<Offer>(`/hotels/${_arg}`);
    // eslint-disable-next-line no-console
    // console.log(data);

    dispatch(loadOffer(data));
    // dispatch(setOfferDataLoadingStatus(false));
    return data;

  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        // eslint-disable-next-line no-console
        console.log('Check auth req await 1');
        const {data} = await api.get<UserData>(APIRoute.Login);
        // eslint-disable-next-line no-console
        console.log('Check auth req await 2', data);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setUserData(data));
      } catch {
        // eslint-disable-next-line no-console
        console.log('Check auth req catch');
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data, data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      // eslint-disable-next-line no-console
      console.log('login',data);
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
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
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(unsetUserData());
    },
  );
