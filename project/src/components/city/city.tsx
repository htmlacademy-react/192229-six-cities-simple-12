import { CityState, Offer } from '../../types/offers-list';
import { FILTER_OPTIONS } from '../const';
import { OffersFilterList } from '../offers-filter-list/offers-filter-list';
import { PlacesList } from '../places-list/places-list';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getActiveRoom } from '../../store/city-process/selector';


type CityProps = {
    currentCityOffers: Offer[];
    currentCity: CityState;
}

export function City ({currentCityOffers, currentCity} : CityProps): JSX.Element {
  const selectedPoint = useAppSelector(getActiveRoom);
  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityOffers.length} places to stay in {currentCity.city.name}</b>
          <form className="places__sorting" action="#" method="get">

            <OffersFilterList options={FILTER_OPTIONS} />
          </form>
          <PlacesList offerList={currentCityOffers} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={currentCity.city} points={currentCityOffers} activeCard={selectedPoint.id} height={'732px'} />
          </section>

        </div>
      </div>
    </div>
  );
}
