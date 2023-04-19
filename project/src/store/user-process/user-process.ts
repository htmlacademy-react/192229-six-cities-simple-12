import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {APIRoute, NameSpace} from '../../const';
// import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import { AppRoute, AuthorizationStatus } from '../../components/const';
import { AppDispatch, State, UserProcess } from '../../types/offers-list';
import { UserData } from '../../types/user-data';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { redirectToRoute } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData : null,
};

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    // try {
    //   const {data} = await api.get<UserData>(APIRoute.Login);
    //   dispatch(requireAuthorization(AuthorizationStatus.Auth));
    //   dispatch(setUserData(data));
    // } catch {

    //   dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    // }

    await api.get<UserData>(APIRoute.Login);
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


export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action : PayloadAction< UserData | null >) => {
      state.userData = action.payload;
    },
    unsetUserData: (state) => {
      state.userData = null;
    },
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { setUserData, unsetUserData, requireAuthorization } = userProcess.actions;
