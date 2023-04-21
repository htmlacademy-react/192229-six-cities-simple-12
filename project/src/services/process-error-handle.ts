import {store} from '../store';

import {clearErrorAction} from '../store/api-actions';
import { setError } from '../store/data-process/data-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
