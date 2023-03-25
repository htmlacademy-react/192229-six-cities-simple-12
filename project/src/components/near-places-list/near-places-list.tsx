import { Offer } from '../../types/offers-list';
import { NearPlace } from '../near-place/near-place';

type NearPlacesListProps = {
    places: Offer[];
}

export function NearPlacesList ({places}:NearPlacesListProps) : JSX.Element {
  return (
    <div className="near-places__list places__list">
      {places.map((place) => <NearPlace key={place.id} place={place}/>)}
    </div>
  );
}
