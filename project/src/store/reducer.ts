import { createReducer } from '@reduxjs/toolkit';
import { CityState, Offer } from '../types/offers-list';
import { changeActiveCity, setCityOffers } from './action';
import { offers } from '../mocks/offers';


const initialState : {activeCity : CityState; offers: Offer[]} = {
  activeCity : { id: 1, city: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  }},
  offers : offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
    })
    .addCase(setCityOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
