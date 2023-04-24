import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { changeActiveCity } from '../../store/city-process/city-process';
import { getActiveCity } from '../../store/city-process/selector';
import { OfferCity } from '../../types/offers-list';

type LocationsItemProp = {
    city: OfferCity;
    id: number;
}

export function LocationsItem ({city, id} : LocationsItemProp) : JSX.Element {

  const isActive = id === useAppSelector(getActiveCity).id;
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <div style={{cursor: 'pointer'}} onClick={() => dispatch(changeActiveCity({id, city}))} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
        <span>{city.name}</span>
      </div>
    </li>
  );
}
