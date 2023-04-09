import { createReducer } from '@reduxjs/toolkit';
import { CityState, Offer, OffersFilterOptionProp, RoomState } from '../types/offers-list';
import { changeActiveCity, changeActiveRoom, changeFilterIsOpen, loadOffer, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setOffersFilter, setUserData, unsetUserData } from './action';
import { offers } from '../mocks/offers';
import { AuthorizationStatus } from '../components/const';
import { UserData } from '../types/user-data';
import { offer } from '../mocks/offer';
// import { AuthorizedUser } from '../types/user-data';


const initialState : {
  activeCity : CityState;
   offers: Offer[];
    offer: Offer;
    selectedOption : OffersFilterOptionProp;
     activeRoom: RoomState;
      isFilterOpen: boolean;
       isOffersDataLoading: boolean;
       isOfferDataLoading: boolean;
       authorizationStatus: string;
       error: string | null; userData : UserData | null;} = {
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
         offer : offer,
         selectedOption : {
           tabIndex: 0,
           name: 'Popular'
         },
         isFilterOpen: false,
         isOffersDataLoading : false,
         isOfferDataLoading : false,
         authorizationStatus : AuthorizationStatus.Unknown,
         userData : null,
         error: null,
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(unsetUserData, (state) => {
      state.userData = null;
    });
});

export {reducer};
