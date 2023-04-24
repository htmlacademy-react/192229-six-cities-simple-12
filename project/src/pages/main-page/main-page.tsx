import { LOCATION_CITES } from '../../const';
import { LocationList } from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getActiveCity, getSelectedOption } from '../../store/city-process/selector';
import { getAllOffers, getErrorStatus } from '../../store/data-process/selector';
import { City } from '../../components/city/city';
import { CityEmpty } from '../../components/city-empty/city-empty';
import { useOffersFilter } from '../../utils';

function MainPage(): JSX.Element {

  const offers = useAppSelector(getAllOffers);
  const currentCity = useAppSelector(getActiveCity);
  const selectedOption = useAppSelector(getSelectedOption);
  const errorStatusOffers = useAppSelector(getErrorStatus);

  const currentCityOffers = useOffersFilter(currentCity.city.name, selectedOption.name, offers);

  return (
    <main className={`page__main page__main--index ${errorStatusOffers ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList cities={LOCATION_CITES} />
        </section>
      </div>
      { errorStatusOffers ? <CityEmpty /> : <City currentCityOffers={currentCityOffers} currentCity={currentCity}/>}
    </main>

  );
}

export default MainPage;
