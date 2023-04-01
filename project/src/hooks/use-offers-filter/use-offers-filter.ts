import { Offer } from '../../types/offers-list';


export function useOffersFilter (
  cityName: string,
  filterOtion: string,
  offers: Offer[]
) : Offer[] {
  const filterByCity = offers.filter((offer) => offer.city.name === cityName);

  switch (filterOtion) {
    case 'Popular':
      return filterByCity;
    case 'Price: low to high':
      return filterByCity.sort(( a, b ) => a.price - b.price);
    case 'Price: high to low':
      return filterByCity.sort(( a, b ) => b.price - a.price);
    case 'Top rated first':
      return filterByCity.sort(( a, b ) => b.rating - a.rating);
    default:
      return filterByCity;
  }
}
