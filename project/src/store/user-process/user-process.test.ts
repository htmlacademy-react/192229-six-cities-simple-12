import {userProcess} from './user-process';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import { AuthorizationStatus } from '../../components/const';
import { UserProcess } from '../../types/offers-list';
import { makeFakeUserData } from '../../mocs';

const mockFakeUserData = makeFakeUserData();
describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {authorizationStatus: AuthorizationStatus.Unknown, userData : null};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.Unknown});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: mockFakeUserData }))
        .toEqual({userData : mockFakeUserData, authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({...state,authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: mockFakeUserData }))
        .toEqual({userData : mockFakeUserData, authorizationStatus: AuthorizationStatus.Auth});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({...state,authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });
});
