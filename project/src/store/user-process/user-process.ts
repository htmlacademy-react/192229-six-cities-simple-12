import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus } from '../../components/const';
import { UserProcess } from '../../types/offers-list';
// import { UserData } from '../../types/user-data';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData : null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    unsetUserData: (state) => {
      state.userData = null;
    },
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  }
});

export const { unsetUserData, requireAuthorization } = userProcess.actions;
