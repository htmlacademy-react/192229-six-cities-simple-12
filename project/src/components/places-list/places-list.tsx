import { Offer } from '../../types/offers-list';
import PlaceCard from '../place-card/place-card';

type PlaceOfferListProps = {
  offerList: Offer[];

};

export function PlacesList({offerList} : PlaceOfferListProps) : JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offerList.map((offer)=>{
        const keyValue = offer.id;
        return (
          <PlaceCard key={keyValue} offer={offer} />
        );
      })}
    </div>
  );
}
