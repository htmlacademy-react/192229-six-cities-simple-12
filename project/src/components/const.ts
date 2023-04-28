export enum AppRoute {
    Main = '/',
    Login = '/login',
    Property = '/offer/:id',
    NotFound = '*',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
 }

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';


export const FILTER_OPTIONS = [
  {
    tabIndex: 0,
    name: 'Popular',
  },
  {
    tabIndex: 1,
    name: 'Price: low to high',
  },
  {
    tabIndex: 2,
    name: 'Price: high to low',
  },
  {
    tabIndex: 3,
    name: 'Top rated first',
  },

];

