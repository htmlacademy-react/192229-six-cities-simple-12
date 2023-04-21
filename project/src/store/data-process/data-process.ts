import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { offer } from '../../mocks/offer';
import { DataProcess} from '../../types/offers-list';
import { addCommentAction, fetchCommentsAction, fetchNearOffersAction, fetchOfferAction, fetchOffersAction } from '../api-actions';
// import { AuthorizationStatus } from '../../components/const';
// import { checkAuthAction } from '../api-actions';

const initialState: DataProcess = {
  offers : [],
  offer : offer,
  isOffersDataLoading : false,
  isSendingForm: false,
  comments: [],
  nearPlaces: [],
  error: null,
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    // loadOffers: (state, action : PayloadAction<Offer[]>) => {
    //   state.offers = action.payload;
    // },
    // loadOffer: (state, action : PayloadAction<Offer>) => {
    //   state.offer = action.payload;
    // },
    // loadComments: (state, action : PayloadAction<RoomComment[]>) => {
    //   state.comments = action.payload;
    // },
    // loadNearPlaces: (state, action : PayloadAction<Offer[]>) => {
    //   state.nearPlaces = action.payload;
    // },
    // setOffersDataLoadingStatus: (state, action : PayloadAction<boolean>) => {
    //   state.isOffersDataLoading = action.payload;
    // },
    // setFormSendingStatus: (state, action : PayloadAction<boolean>) => {
    //   state.isSendingForm = action.payload;
    // },
    setError: (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.error = null;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.error = null;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.error = 'Cant load offers';
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
        state.offer = offer;
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


