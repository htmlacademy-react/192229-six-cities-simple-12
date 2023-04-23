export const CITES = [
  { id: 1, name: 'Paris'},
  { id: 2, name: 'Cologne' },
  { id: 3, name: 'Brussels' },
  { id: 4, name: 'Amsterdam'},
  { id: 5, name: 'Hamburg' },
  { id: 6, name: 'Dusseldorf'}
];

export const RANDOM_CITES = [
  'Paris', 'Cologne', 'Brussels' ,'Amsterdam','Hamburg','Dusseldorf'
];

export const START_INDEX_RANDOM_CITY = 0;


export const CITES_OBJ = [
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
