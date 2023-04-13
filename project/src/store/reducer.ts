import { createReducer } from '@reduxjs/toolkit';
import { CityState, Offer, OffersFilterOptionProp, RoomComment, RoomReview, RoomState } from '../types/offers-list';
import { changeActiveCity, changeActiveRoom, changeFilterIsOpen, loadComments, loadNearPlaces, loadOffer, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setOffersFilter, setRoomReview, setUserData, unsetUserData, validateCommentForm } from './action';
// import { offers } from '../mocks/offers';
import { AuthorizationStatus } from '../components/const';
import { UserData } from '../types/user-data';
import { offer } from '../mocks/offer';
// import { AuthorizedUser } from '../types/user-data';

type InitialState = {
  activeCity : CityState;
  offers: Offer[];
  offer: Offer;
  selectedOption : OffersFilterOptionProp;
  activeRoom: RoomState;
  isFilterOpen: boolean;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  authorizationStatus: string;
  error: string | null;
  userData : UserData | null;
  roomReview: RoomReview;
  comments: RoomComment[];
  isFormValid: boolean;
  nearPlaces: Offer[];
}


const initialState : InitialState = {
  activeCity : { id: 1, city: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  }},
  activeRoom: {id: null},
  offers : [],
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
  roomReview: {
    rating: '',
    review: '',
    hotelId: ''
  },
  comments: [],
  isFormValid: false,
  nearPlaces: []
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
    .addCase(setRoomReview, (state, action) => {
      state.roomReview = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(validateCommentForm, (state,action) => {
      if(state.roomReview.rating !== '' && (state.roomReview.review.length >= 50 && state.roomReview.review.length <= 300 )) {
        state.isFormValid = true;
      }
      else { state.isFormValid = false; }
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
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
