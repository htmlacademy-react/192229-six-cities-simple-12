import { Offer } from '../../types/offers-list';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';

type PlaceOfferListProps = {
  offerList: Offer[];
};

export function PlacesList({offerList} : PlaceOfferListProps) : JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  // eslint-disable-next-line no-console
  console.log(`Активный элемент --->${String(activeCard)}`);

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offerList.map((offer)=>{
        const keyValue = offer.id;
        return (
          <PlaceCard key={keyValue} offer={offer} onMouseEnter={() => setActiveCard(offer.id)} onMouseLeave={() => setActiveCard(null)} />
        );
      })}
    </div>

  );
}
