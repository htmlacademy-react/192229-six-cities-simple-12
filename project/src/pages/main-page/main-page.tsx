import { PlacesList } from '../../components/places-list/places-list';
import { Offer } from '../../types/offers-list';
import { useState } from 'react';
import { Map } from '../../components/map/map';
// import { pointMocks } from '../../mocks/points';
import { cityMocks } from '../../mocks/city';
import { CITES } from '../../const';
import { LocationList } from '../../components/location-list/location-list';


type PlaceRentInformation = {
  placesCount: number;
  offers: Offer[];
};

function MainPage({placesCount,offers} : PlaceRentInformation): JSX.Element {

  const [isSortOpen, setSortState] = useState<boolean>(false);

  const [selectedPoint, setSelectedPoint] = useState<number|null>(null);

  const offersAmsterdam = offers.filter((offer) => offer.city.name === 'Amsterdam');


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList cities={CITES} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0} onClick={()=>setSortState(!isSortOpen)}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlacesList offerList={offersAmsterdam} cardHoverHandler={setSelectedPoint} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={cityMocks} points={offersAmsterdam} activeCard={selectedPoint} height={'712px'} />
            </section>

          </div>
        </div>
      </div>
    </main>

  );
}

export default MainPage;
