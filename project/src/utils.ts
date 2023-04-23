import { MAX_ROOM_FEEDBACKS, MAX_STARS_IN_REEDBACK, RANDOM_CITES, START_INDEX_RANDOM_CITY } from './const';
import { Offer, RoomComment } from './types/offers-list';


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

export function random (min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomCity () : string {
  return RANDOM_CITES[random(START_INDEX_RANDOM_CITY, RANDOM_CITES.length - 1)];
}

export function getRating (rating: number) : string {
  return String(Math.floor(rating * 100 / MAX_STARS_IN_REEDBACK));
}
function getDateForSorting(date: string): Date {
  return new Date(date);
}
export function getSortedFeedbacks(feedbacks: RoomComment[]): RoomComment[] {
  return feedbacks.slice().sort((a, b): number => {
    const firstDate = getDateForSorting(a.date);
    const secondDate = getDateForSorting(b.date);
    if (firstDate < secondDate) {
      return 1;
    } else if (firstDate > secondDate) {
      return -1;
    } else {
      return 0;
    }
  }).slice(0, MAX_ROOM_FEEDBACKS);
}
