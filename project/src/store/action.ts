import {createAction} from '@reduxjs/toolkit';
import { CityState, OffersFilterOptionProp, RoomState } from '../types/offers-list';

export const changeActiveCity = createAction('city/changeActiveCity',
  (activeCity : CityState ) => ({
    payload: {activeCity}
  })
);

export const changeActiveRoom = createAction('city/changeActiveRoom',
  (activeRoom : RoomState ) => ({
    payload: {activeRoom}
  })
);

export const setOffersFilter = createAction('city/setOffersFilter',
  (selectedOption : OffersFilterOptionProp ) => ({
    payload: {selectedOption}
  })
);

export const changeFilterIsOpen = createAction('city/changeFilterIsOpen');

export const setCityOffers = createAction('city/setCityOffers');

// export const getOffersForCurrentCity = createAction('city/getOffersForCity');
