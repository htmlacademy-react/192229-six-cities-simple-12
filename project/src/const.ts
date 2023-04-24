export const CITES = [
  { id: 1, name: 'Paris'},
  { id: 2, name: 'Cologne' },
  { id: 3, name: 'Brussels' },
  { id: 4, name: 'Amsterdam'},
  { id: 5, name: 'Hamburg' },
  { id: 6, name: 'Dusseldorf'}
];

export const CITES_IN_LOGIN_PAGES = [
  'Paris', 'Cologne', 'Brussels' ,'Amsterdam','Hamburg','Dusseldorf'
];

export const START_INDEX_RANDOM_CITY = 0;

export const LOCATION_CITES = [
  { id: 1,
    city: {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    }
  },
  { id: 2, city: {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  } },
  { id: 3, city: {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  } },
  { id: 4, city: {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13
    }
  }},
  { id: 5, city: {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  } },
  { id: 6, city: {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  }}
];

export const OFFER = {
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'previewImage': 'https://12.react.pages.academy/static/hotel/3.jpg',
  'images': [
    'https://12.react.pages.academy/static/hotel/14.jpg',
    'https://12.react.pages.academy/static/hotel/8.jpg',
    'https://12.react.pages.academy/static/hotel/19.jpg',
    'https://12.react.pages.academy/static/hotel/16.jpg',
    'https://12.react.pages.academy/static/hotel/10.jpg',
    'https://12.react.pages.academy/static/hotel/15.jpg',
    'https://12.react.pages.academy/static/hotel/3.jpg',
    'https://12.react.pages.academy/static/hotel/6.jpg',
    'https://12.react.pages.academy/static/hotel/13.jpg',
    'https://12.react.pages.academy/static/hotel/2.jpg',
    'https://12.react.pages.academy/static/hotel/9.jpg',
    'https://12.react.pages.academy/static/hotel/1.jpg',
    'https://12.react.pages.academy/static/hotel/18.jpg',
    'https://12.react.pages.academy/static/hotel/20.jpg'
  ],
  'title': 'Amazing and Extremely Central Flat',
  'isPremium': false,
  'rating': 3.8,
  'type': 'room',
  'bedrooms': 1,
  'maxAdults': 2,
  'price': 224,
  'goods': [
    'Laptop friendly workspace'
  ],
  'host': {
    'id': 25,
    'name': 'Angelina',
    'isPro': true,
    'avatarUrl': 'img/avatar-angelina.jpg'
  },
  'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  'location': {
    'latitude': 48.862610000000004,
    'longitude': 2.369499,
    'zoom': 16
  },
  'id': 1
};

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/:id',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  User = 'USER',
  Form = 'FORM',
  Data = 'DATA',
  City = 'CITY',
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_ROOM_FEEDBACKS = 10;
export const MAX_STARS_IN_REEDBACK = 5;
export const MIN_IMAGES_IN_ROOM = 0;
export const MAX_IMAGES_IN_ROOM = 6;
export const MIN_SYMBOLS = 50;
export const MAX_SYMBOLS = 300;
