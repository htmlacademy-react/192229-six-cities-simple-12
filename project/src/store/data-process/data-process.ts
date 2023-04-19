import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { offer } from '../../mocks/offer';
import { DataProcess, Offer, RoomComment } from '../../types/offers-list';

const initialState: DataProcess = {
  offers : [],
  offer : offer,
  isOffersDataLoading : false,
  isSendingForm: false,
  comments: [],
  nearPlaces: []
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers: (state, action : PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    loadOffer: (state, action : PayloadAction<Offer>) => {
      state.offer = action.payload;
    },
    loadComments: (state, action : PayloadAction<RoomComment[]>) => {
      state.comments = action.payload;
    },
    loadNearPlaces: (state, action : PayloadAction<Offer[]>) => {
      state.nearPlaces = action.payload;
    },
    setOffersDataLoadingStatus: (state, action : PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    },
    setFormSendingStatus: (state, action : PayloadAction<boolean>) => {
      state.isSendingForm = action.payload;
    },

  }
});

export const { loadOffers, loadOffer, loadComments, loadNearPlaces, setOffersDataLoadingStatus, setFormSendingStatus } = dataProcess.actions;


