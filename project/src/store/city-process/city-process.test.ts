import { makeFakeCityState, makeFakeRoomState, makeFakeSelectedOption } from '../../mocs';
import { CityProcess } from '../../types/offers-list';
import { changeActiveCity, changeActiveRoom, changeFilterIsOpen, cityProcess, setOffersFilter } from './city-process';

const mockFakeCityState = makeFakeCityState();
const mockFakeRoomState = makeFakeRoomState();
const mockFakeSelectedOption = makeFakeSelectedOption();

describe('Reducer: cityProcess', () => {
  let initialState : CityProcess;

  beforeEach(() => {
    initialState = {activeCity : { id: 1,
      city: {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      }},
    activeRoom: {id: null},
    selectedOption : {
      tabIndex: 0,
      name: 'Popular'
    },
    isFilterOpen: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(cityProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should change city state by a given value', () => {
    expect(cityProcess.reducer(initialState, changeActiveCity(mockFakeCityState)))
      .toEqual({...initialState, activeCity: mockFakeCityState});
  });

  it('should change room state by a given value', () => {
    expect(cityProcess.reducer(initialState, changeActiveRoom(mockFakeRoomState)))
      .toEqual({...initialState, activeRoom: mockFakeRoomState});
  });

  it('should change main page filter state by a given value', () => {
    expect(cityProcess.reducer(initialState, setOffersFilter(mockFakeSelectedOption)))
      .toEqual({...initialState, selectedOption: mockFakeSelectedOption});
  });

  it('should change main page filterIsOpen state by a given value', () => {
    expect(cityProcess.reducer(initialState, changeFilterIsOpen()))
      .toEqual({...initialState, isFilterOpen: true});
  });


});
