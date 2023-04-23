import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataProcess } from './data-process/data-process';
import { cityProcess } from './city-process/city-process';
import { formProcess } from './form-process/form-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Form]: formProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.City]: cityProcess.reducer,
});
