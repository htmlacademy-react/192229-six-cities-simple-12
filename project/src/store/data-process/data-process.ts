import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, OFFER } from '../../const';

import { DataProcess} from '../../types/offers-list';
import { addCommentAction, fetchCommentsAction, fetchNearOffersAction, fetchOfferAction, fetchOffersAction } from '../api-actions';

const initialState: DataProcess = {
  offers : [],
  offer : OFFER,
  isOffersDataLoading : false,
  isSendingForm: false,
  comments: [],
  nearPlaces: [],
  error: null,
  hasError: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setError: (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.error = null;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.error = 'Cant load offers';
        state.hasError = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.nearPlaces = [];
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offer = OFFER;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
      })
      .addCase(addCommentAction.pending, (state) => {
        state.isSendingForm = true;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isSendingForm = false;
      })
      .addCase(addCommentAction.rejected, (state) => {
        state.comments = [];
        state.isSendingForm = false;
      });
  }
});

export const { setError } = dataProcess.actions;


