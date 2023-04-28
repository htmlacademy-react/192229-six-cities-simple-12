import { OFFER } from '../../const';
import { makeFakeComment, makeFakeOffer } from '../../mocs';
import { DataProcess } from '../../types/offers-list';
import { addCommentAction, fetchCommentsAction, fetchNearOffersAction, fetchOfferAction, fetchOffersAction } from '../api-actions';
import { dataProcess } from './data-process';

const mockFakeOffers = new Array(4).fill(null).map(()=> makeFakeOffer());
const mockFakeOffer = makeFakeOffer();
const mockFakeComments = new Array(4).fill(null).map(()=> makeFakeComment());
describe('Reducer: data', () => {
  let state: DataProcess;

  beforeEach(() => {
    state = {
      offers : [],
      offer : OFFER,
      isOffersDataLoading : false,
      isSendingForm: false,
      comments: [],
      nearPlaces: [],
      error: null,
      hasError: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  describe('fetchOffersAction test', () => {
    it('should return empty state if fetchOffersAction pending', () => {
      expect(dataProcess.reducer(state, { type: fetchOffersAction.pending.type }))
        .toEqual({...state, isOffersDataLoading: true, error: null, hasError: false});
    });
    it('should return payload state if fetchOffersAction fulfilled', () => {
      expect(dataProcess.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: mockFakeOffers}))
        .toEqual({...state, isOffersDataLoading: false, error: null, hasError: false, offers : mockFakeOffers});
    });
    it('should reset state if fetchOffersAction rejected', () => {
      expect(dataProcess.reducer(state, { type: fetchOffersAction.rejected.type }))
        .toEqual({...state, error: 'Cant load offers', hasError: true, offers : []});
    });
  });

  describe('fetchNearOffersAction test', () => {
    it('should return payload state if fetchNearOffersAction fulfilled', () => {
      expect(dataProcess.reducer(state, { type: fetchNearOffersAction.fulfilled.type, payload: mockFakeOffers}))
        .toEqual({...state, nearPlaces : mockFakeOffers});
    });
    it('should reset state if fetchNearOffersAction rejected', () => {
      expect(dataProcess.reducer({...state, nearPlaces: mockFakeOffers}, { type: fetchNearOffersAction.rejected.type }))
        .toEqual({...state, nearPlaces : []});
    });
  });

  describe('fetchOfferAction test', () => {
    it('should return payload offer if fetchOfferAction fulfilled', () => {
      expect(dataProcess.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: mockFakeOffer}))
        .toEqual({...state, offer : mockFakeOffer});
    });
    it('should reset offer if fetchOfferAction rejected', () => {
      expect(dataProcess.reducer({...state, offer: mockFakeOffer}, { type: fetchOfferAction.rejected.type }))
        .toEqual({...state, offer : OFFER});
    });
  });

  describe('fetchCommentsAction test', () => {
    it('should return empty Comments if fetchCommentsAction pending', () => {
      expect(dataProcess.reducer(state, { type: fetchCommentsAction.pending.type }))
        .toEqual({...state, error: null});
    });
    it('should return payload Comments if fetchCommentsAction fulfilled', () => {
      expect(dataProcess.reducer(state, { type: fetchCommentsAction.fulfilled.type, payload: mockFakeComments}))
        .toEqual({...state, comments : mockFakeComments});
    });
    it('should reset Comments if fetchCommentsAction rejected', () => {
      expect(dataProcess.reducer({...state, comments: mockFakeComments}, { type: fetchCommentsAction.rejected.type }))
        .toEqual({...state, comments : []});
    });
  });

  describe('addCommentAction test', () => {
    it('should return empty isSendingForm if fetchCommentsAction pending', () => {
      expect(dataProcess.reducer(state, { type: addCommentAction.pending.type }))
        .toEqual({...state, isSendingForm: true});
    });
    it('should return payload isSendingForm if fetchCommentsAction fulfilled', () => {
      expect(dataProcess.reducer(state, { type: addCommentAction.fulfilled.type, payload: mockFakeComments}))
        .toEqual({...state, comments : mockFakeComments, isSendingForm : false});
    });
    it('should reset isSendingForm if fetchCommentsAction rejected', () => {
      expect(dataProcess.reducer({...state, comments: mockFakeComments}, { type: addCommentAction.rejected.type }))
        .toEqual({...state, isSendingForm : false, comments : []});
    });
  });

});
