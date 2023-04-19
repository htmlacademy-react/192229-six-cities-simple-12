import {store} from '../store';
import {setError} from '../store/city-process/city-process';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
