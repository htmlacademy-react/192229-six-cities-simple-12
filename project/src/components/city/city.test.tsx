import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import { City } from './city';
import { makeFakeCityState, makeFakeOffer } from '../../mocs';
import { Provider } from 'react-redux';
import { store } from '../../store';

const mockOffers = new Array(1).fill(null).map(()=> makeFakeOffer()) ;
const mockCity = makeFakeCityState();

describe('Component: City', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store = {store}>
        <HistoryRouter history={history}>
          <City currentCityOffers={mockOffers} currentCity={mockCity}/>
        </HistoryRouter>
      </Provider>
    );

    const headerElement = screen.getByText(`${mockOffers.length} places to stay in ${mockCity.city.name}`);

    expect(headerElement).toBeInTheDocument();

  });
});
