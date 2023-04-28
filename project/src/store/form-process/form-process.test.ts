import { makeFakeRoomRatingWrong, makeFakeRoomReview, makeFakeRoomReviewWrongLong, makeFakeRoomReviewWrongShort } from '../../mocs';
import { FormProcess } from '../../types/offers-list';
import { formProcess, resetReviewForm, setRoomReview, validateCommentForm } from './form-process';

const mockFakeRoomReview = makeFakeRoomReview();

const mockFakeRoomReviewWrongShort = makeFakeRoomReviewWrongShort();
const mockFakeRoomReviewWrongLong = makeFakeRoomReviewWrongLong();
const mockFakeRoomRatingWrong = makeFakeRoomRatingWrong();


describe('Reducer: formProcess', () => {
  let initialState : FormProcess;

  beforeEach(() => {
    initialState = {
      roomReview: {
        rating: '',
        review: '',
        hotelId: ''
      },
      isFormValid: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(formProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('reset state should return initial state', () => {
    expect(formProcess.reducer(initialState, resetReviewForm()))
      .toEqual(initialState);
  });

  it('setRoomReview should change roomreview state by a given value', () => {
    expect(formProcess.reducer(initialState, setRoomReview(mockFakeRoomReview)))
      .toEqual({...initialState, roomReview: mockFakeRoomReview});
  });

  it('Valid review should return isFormValid: true', () => {
    expect(formProcess.reducer({...initialState, roomReview:mockFakeRoomReview}, validateCommentForm()))
      .toEqual({...initialState, roomReview:mockFakeRoomReview, isFormValid: true});
  });

  it('Wrong length of review should return isFormValid: false(too short)', () => {
    expect(formProcess.reducer({...initialState, roomReview:mockFakeRoomReviewWrongShort}, validateCommentForm()))
      .toEqual({...initialState, roomReview:mockFakeRoomReviewWrongShort, isFormValid: false});
  });

  it('Wrong length of review should return isFormValid: false(too long)', () => {
    expect(formProcess.reducer({...initialState, roomReview:mockFakeRoomReviewWrongLong}, validateCommentForm()))
      .toEqual({...initialState, roomReview:mockFakeRoomReviewWrongLong, isFormValid: false});
  });

  it('Wrong revieq return isFormValid: false(no stars)', () => {
    expect(formProcess.reducer({...initialState, roomReview:mockFakeRoomRatingWrong}, validateCommentForm()))
      .toEqual({...initialState, roomReview:mockFakeRoomRatingWrong, isFormValid: false});
  });


});
