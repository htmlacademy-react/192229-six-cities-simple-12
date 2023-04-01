import { PlacesList } from '../../components/places-list/places-list';
// import { Offer } from '../../types/offers-list';
// import { useState } from 'react';
import { Map } from '../../components/map/map';
// import { pointMocks } from '../../mocks/points';
// import { cityMocks } from '../../mocks/city';
import { CITES_OBJ } from '../../const';
import { LocationList } from '../../components/location-list/location-list';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { FILTER_OPTIONS } from '../../components/const';
import { OffersFilterList } from '../../components/offers-filter-list/offers-filter-list';
import { useOffersFilter } from '../../hooks/use-offers-filter/use-offers-filter';


function MainPage(): JSX.Element {


  const selectedPoint = useAppSelector((state) => state.activeRoom);

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.activeCity);
  const selectedOption = useAppSelector((state) => state.selectedOption.name);

  // const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity.city.name);
  const currentCityOffers = useOffersFilter(currentCity.city.name, selectedOption, offers);


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList cities={CITES_OBJ} />
        </section>
      </div>
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
              <Map city={currentCity.city} points={currentCityOffers} activeCard={selectedPoint.id} height={'712px'} />
            </section>

          </div>
        </div>
      </div>
    </main>

  );
}

export default MainPage;
