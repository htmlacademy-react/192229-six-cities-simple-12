import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

import { CityProcess, CityState, OffersFilterOptionProp, RoomState } from '../../types/offers-list';

const initialState: CityProcess = {
  activeCity : { id: 1,
    city: {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    }},
  activeRoom: {id: null},
  selectedOption : {
    tabIndex: 0,
    name: 'Popular'
  },
  isFilterOpen: false,
  error: null,
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeActiveCity: (state, action : PayloadAction<CityState>) => {
      state.activeCity = action.payload;
    },
    changeActiveRoom: (state, action : PayloadAction<RoomState>) => {
      state.activeRoom = action.payload;
    },
    changeFilterIsOpen: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    setOffersFilter: (state, action : PayloadAction<OffersFilterOptionProp>) => {
      state.selectedOption = action.payload;
    },
    setError: (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const {changeActiveCity, changeActiveRoom, changeFilterIsOpen, setOffersFilter, setError} = cityProcess.actions;
