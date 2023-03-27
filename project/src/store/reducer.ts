import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity } from './action';


const initialState = {
  activeCityId : 1,
  newCityId : 1
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.activeCityId = action.payload;
    });
});

export {reducer};
