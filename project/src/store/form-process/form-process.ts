import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
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
    validateCommentForm: (state,action) => {
      if(state.roomReview.rating !== '' && (state.roomReview.review.length >= 50 && state.roomReview.review.length <= 300 )) {
        state.isFormValid = true;
      }
      else {
        state.isFormValid = false;
      }
    },

  }
});

export const { resetReviewForm, setRoomReview, validateCommentForm } = formProcess.actions;
