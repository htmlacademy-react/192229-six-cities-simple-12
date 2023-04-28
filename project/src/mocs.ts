import {datatype, address, name, internet, image, random} from 'faker';
import { CityState, Offer, OffersFilterOptionProp, RoomReview, RoomState } from './types/offers-list';
import { UserData } from './types/user-data';
import { RoomComment } from './types/offers-list';

export const makeFakeCityState = () : CityState => ({
  id: datatype.number(10),
  city: {
    'name': address.city(),
    'location': {
      'latitude': Number(address.latitude()) ,
      'longitude': Number(address.longitude()),
      'zoom': datatype.number(10),
    }},
} as CityState);

export const makeFakeRoomState = () : RoomState => ({
  id: datatype.number(10),
} as RoomState);

export const makeFakeSelectedOption = () : OffersFilterOptionProp => ({
  tabIndex: datatype.number(10),
  name: datatype.string(5)
} as OffersFilterOptionProp);


export const makeFakeRoomReview = () : RoomReview => ({
  rating: String(datatype.number(5)),
  review: datatype.string(100),
  hotelId: String(datatype.number(5))
} as RoomReview);

export const makeFakeRoomReviewWrongShort = () : RoomReview => ({
  rating: String(datatype.number(5)),
  review: datatype.string(40),
  hotelId: String(datatype.number(5))
} as RoomReview);

export const makeFakeRoomReviewWrongLong = () : RoomReview => ({
  rating: String(datatype.number(5)),
  review: datatype.string(400),
  hotelId: String(datatype.number(5))
} as RoomReview);

export const makeFakeRoomRatingWrong = () : RoomReview => ({
  rating: '',
  review: datatype.string(200),
  hotelId: String(datatype.number(5))
} as RoomReview);

export const makeFakeUserData = () : UserData | null => ({
  avatarUrl: image.imageUrl(),
  email: String(internet.email()),
  id: datatype.number(4),
  isPro: datatype.boolean(),
  name: name.firstName(),
  token: datatype.string(100),
} as UserData);

export const makeFakeOffer = () : Offer => ({
  'city': {
    'name': address.cityName(),
    'location': {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      'zoom': datatype.number(8)
    }
  },
  'previewImage': image.imageUrl(),
  'images': [
    image.imageUrl(),
    image.imageUrl()
  ],
  'title': random.words(5),
  'isPremium': datatype.boolean(),
  'rating': datatype.float(0.1),
  'type': random.word(),
  'bedrooms': datatype.number(1),
  'maxAdults': datatype.number(1),
  'price': datatype.number(100),
  'goods': [
    random.words(3),
    random.words(5)
  ],
  'host': {
    'id': datatype.number(2),
    'name': name.findName(),
    'isPro': datatype.boolean(),
    'avatarUrl': image.imageUrl()
  },
  'description': random.words(20),
  'location': {
    'latitude': Number(address.latitude()),
    'longitude': Number(address.longitude()),
    'zoom': datatype.number(2)
  },
  'id': datatype.number(2)
} as Offer);


export const makeFakeComment = () : RoomComment => ({
  comment: random.words(20),
  date: String(datatype.datetime()),
  id: datatype.number(4),
  rating: datatype.number(2),
  user: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(2),
    isPro: datatype.boolean(),
    name: name.findName(),
  }
} as RoomComment);
