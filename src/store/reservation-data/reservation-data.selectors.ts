import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TReservationData } from '../../types/state';
import { NameSpace } from '../../const';

export const getReservations = createSelector(
  (state: TAppState) => state[NameSpace.Reservations],
  (state: TReservationData) => state.reservations
);

export const getReservationFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Reservations],
  (state: TReservationData) => state.reservationFetchingStatus
);
