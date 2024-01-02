import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { deleteReservation, fetchReservations } from '../api-actions';
import { TReservationData } from '../../types/state';

const initialState: TReservationData = {
  reservations: [],
  reservationFetchingStatus: RequestStatus.Idle,
};

export const reservationData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.reservationFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservationFetchingStatus = RequestStatus.Success;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.reservationFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.reservationFetchingStatus = RequestStatus.Pending;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservationFetchingStatus = RequestStatus.Success;
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload
        );
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.reservationFetchingStatus = RequestStatus.Rejected;
      });
  },
});
