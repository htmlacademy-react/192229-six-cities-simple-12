import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MAX_SYMBOLS, MIN_SYMBOLS, NameSpace } from '../../const';
import { FormProcess, RoomReview } from '../../types/offers-list';

const initialState: FormProcess = {
  roomReview: {
    rating: '',
    review: '',
    hotelId: ''
  },
  isFormValid: false,
};

export const formProcess = createSlice({
  name: NameSpace.Form,
  initialState,
  reducers: {
    resetReviewForm: (state) => {
      state.roomReview = {
        rating: '',
        review: '',
        hotelId: ''
      };
    },
    setRoomReview: (state, action : PayloadAction<RoomReview>) => {
      state.roomReview = action.payload;
    },
    validateCommentForm: (state) => {
      if(state.roomReview.rating !== '' && (state.roomReview.review.length >= MIN_SYMBOLS && state.roomReview.review.length <= MAX_SYMBOLS )) {
        state.isFormValid = true;
      }
      else {
        state.isFormValid = false;
      }
    },

  }
});

export const { resetReviewForm, setRoomReview, validateCommentForm } = formProcess.actions;
