import { NameSpace } from '../../const';
import { RoomReview, State } from '../../types/offers-list';


export const getRoomReview = (state: State): RoomReview => state[NameSpace.Form].roomReview;
export const getFormValidStatus = (state: State): boolean => state[NameSpace.Form].isFormValid;
