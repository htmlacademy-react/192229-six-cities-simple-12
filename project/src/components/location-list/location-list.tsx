import { CityNavLink } from '../../types/offers-list';
import { LocationsItem } from '../locations-item/locations-item';

type LocationListProp = {
    cities: CityNavLink[];
};

export function LocationList ({cities} : LocationListProp) : JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city)=> <LocationsItem key={city.id} {...city}/>)}
    </ul>
  );
}
