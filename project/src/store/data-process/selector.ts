import { NameSpace } from '../../const';
import { Offer, RoomComment, State } from '../../types/offers-list';


export const getAllOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer => state[NameSpace.Data].offer;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getSendingFormStatus = (state: State): boolean => state[NameSpace.Data].isSendingForm;
export const getComments = (state: State): RoomComment[] => state[NameSpace.Data].comments;
export const getNearPlaces = (state: State): Offer[] => state[NameSpace.Data].nearPlaces;
export const getError = (state: State): string | null => state[NameSpace.Data].error;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
