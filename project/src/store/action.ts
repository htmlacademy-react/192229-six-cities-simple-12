import {createAction} from '@reduxjs/toolkit';
import { CityState, Offer, OffersFilterOptionProp, RoomComment, RoomReview, RoomState } from '../types/offers-list';
import { AppRoute, AuthorizationStatus } from '../components/const';
import { UserData } from '../types/user-data';

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

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadNearPlaces = createAction<Offer[]>('data/loadNearPlaces');
export const loadComments = createAction<RoomComment[]>('data/loadComments');

export const validateCommentForm = createAction<RoomReview>('form/validateCommentForm');


export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setRoomReview = createAction<RoomReview>('form/setRoomReview');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const setUserData = createAction<UserData>('user/setUserData');
export const unsetUserData = createAction('user/unsetUserData');
// export const setCityOffers = createAction('city/setCityOffers');

