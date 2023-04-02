import { createReducer } from '@reduxjs/toolkit';
import { CityState, Offer, OffersFilterOptionProp, RoomState } from '../types/offers-list';
import { changeActiveCity, changeActiveRoom, changeFilterIsOpen, loadOffers, setOffersDataLoadingStatus, setOffersFilter } from './action';
import { offers } from '../mocks/offers';


const initialState : {
  activeCity : CityState;
   offers: Offer[];
    selectedOption : OffersFilterOptionProp;
     activeRoom: RoomState;
      isFilterOpen: boolean;
       isOffersDataLoading: boolean;} = {
         activeCity : { id: 1, city: {
           'name': 'Paris',
           'location': {
             'latitude': 48.85661,
             'longitude': 2.351499,
             'zoom': 13
           }
         }},
         activeRoom: {id: null},
         offers : offers,
         selectedOption : {
           tabIndex: 0,
           name: 'Popular'
         },
         isFilterOpen: false,
         isOffersDataLoading : false,
       };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
    })
    .addCase(changeActiveRoom, (state, action) => {
      state.activeRoom = action.payload.activeRoom;
    })
    .addCase(changeFilterIsOpen, (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    })
    .addCase(setOffersFilter, (state, action) => {
      state.selectedOption = action.payload.selectedOption;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
