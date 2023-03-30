import {createAction} from '@reduxjs/toolkit';
import { CityState } from '../types/offers-list';

export const changeActiveCity = createAction('city/changeActiveCity',
  (activeCity : CityState ) => ({
    payload: {activeCity}
  })
);

export const setCityOffers = createAction('city/setCityOffers');

// export const getOffersForCurrentCity = createAction('city/getOffersForCity');
