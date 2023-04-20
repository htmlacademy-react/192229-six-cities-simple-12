import {createAction} from '@reduxjs/toolkit';
// import { Offer, RoomComment } from '../types/offers-list';
import { AppRoute } from '../components/const';
// import { UserData } from '../types/user-data';

export const redirectToRoute = createAction<AppRoute>('city/redirectToRoute');

