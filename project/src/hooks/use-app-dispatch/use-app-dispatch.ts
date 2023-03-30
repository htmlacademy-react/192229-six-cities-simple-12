import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/offers-list';

export const useAppDispatch = () => useDispatch<AppDispatch>();
