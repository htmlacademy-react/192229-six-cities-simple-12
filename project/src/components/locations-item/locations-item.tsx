import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { changeActiveCity } from '../../store/action';
import { OfferCity } from '../../types/offers-list';


type LocationsItemProp = {
    city: OfferCity;
    id: number;
}

export function LocationsItem ({city, id} : LocationsItemProp) : JSX.Element {

  const isActive = id === useAppSelector((state) => state.activeCity.id);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a onClick={() => dispatch(changeActiveCity({id,city}))} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href={`#${city.name}`}>
        <span>{city.name}</span>
      </a>
    </li>
  );
}
