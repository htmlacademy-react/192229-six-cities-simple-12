import { NameSpace } from '../../const';
import { CityState, OffersFilterOptionProp, RoomState, State } from '../../types/offers-list';


export const getActiveCity = (state: State): CityState => state[NameSpace.City].activeCity;
export const getSelectedOption = (state: State): OffersFilterOptionProp => state[NameSpace.City].selectedOption;
export const getActiveRoom = (state: State): RoomState => state[NameSpace.City].activeRoom;
export const getIsFilterOpen = (state: State): boolean => state[NameSpace.City].isFilterOpen;
export const getError = (state: State): string | null => state[NameSpace.City].error;
