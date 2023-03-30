import {TypedUseSelectorHook, useSelector} from 'react-redux';
import { State } from '../../types/offers-list';


export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
