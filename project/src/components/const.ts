export enum AppRoute {
    Main = '/',
    Login = '/login',
    Property = '/offer/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
 }

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

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

