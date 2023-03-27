import {createAction} from '@reduxjs/toolkit';
// import { CityId } from '../types/offers-list';

export const changeActiveCity = createAction('city/changeActiveCity',
  (cityId ) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    payload: cityId,

  })
);
