import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

// import {loadComments, loadNearPlaces, loadOffer, loadOffers, setFormSendingStatus, setOffersDataLoadingStatus,} from '../store/data-process/data-process';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import { AppDispatch, Offer, RoomComment, RoomReview, State } from '../types/offers-list';
// import { store } from '.';
// import { AppRoute, AuthorizationStatus } from '../components/const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dataProcess } from './data-process/data-process';
// import { redirectToRoute } from './action';
// import { requireAuthorization, setUserData, unsetUserData } from './user-process/user-process';


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
  async (_arg, {dispatch, extra: api}) => {
    // dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    // eslint-disable-next-line no-console
    console.log(data);
    // dispatch(loadOffers(data));
    // dispatch(setOffersDataLoadingStatus(false));
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearOffers',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<Offer[]>(`/hotels/${_arg}/nearby`);
    // eslint-disable-next-line no-console
    // console.log('Предложения->',data);
    // dispatch(loadNearPlaces(data));
    return data;

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
    // dispatch(loadOffer(data));
    // dispatch(setOfferDataLoadingStatus(false));
    return data;

  },
);

export const fetchCommentsAction = createAsyncThunk<RoomComment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchComments',
  async (_arg, {dispatch, extra: api}) => {
    // dispatch(setOfferDataLoadingStatus(true));
    const {data} = await api.get<RoomComment[]>(`/comments/${_arg}`);
    // dispatch(loadComments(data));
    // dispatch(setOfferDataLoadingStatus(false));

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
    // dispatch(setFormSendingStatus(true));
    const {data} = await api.post<RoomComment[]>(`/comments/${hotelId}`, {'rating':rating, 'comment':review});
    // dispatch(loadComments(data));
    // dispatch(setFormSendingStatus(false));
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
      // try {
      //   const {data} = await api.get<UserData>(APIRoute.Login);
      //   dispatch(requireAuthorization(AuthorizationStatus.Auth));
      //   dispatch(setUserData(data));
      // } catch {

      //   dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      // }

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
      // dispatch(redirectToRoute(AppRoute.Main));
      // dispatch(requireAuthorization(AuthorizationStatus.Auth));
      // dispatch(setUserData(data));
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
      // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      // dispatch(redirectToRoute(AppRoute.Main));
      // dispatch(unsetUserData());
    },
  );
