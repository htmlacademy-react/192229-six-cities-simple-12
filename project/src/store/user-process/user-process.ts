import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { NameSpace} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import { AuthorizationStatus } from '../../components/const';
import { UserProcess } from '../../types/offers-list';
import { UserData } from '../../types/user-data';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData : null,
};

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
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { setUserData, unsetUserData, requireAuthorization } = userProcess.actions;
