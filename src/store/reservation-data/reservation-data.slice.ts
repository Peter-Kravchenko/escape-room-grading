import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { deleteReservation, fetchReservations } from '../api-actions';
import { TReservationData } from '../../types/state';

const initialState: TReservationData = {
  reservations: [],
  reservationFetchingStatus: RequestStatus.Idle,
  deleteReservationStatus: RequestStatus.Idle,
};

export const reservationData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    resetDeleteReservationStatus: (state) => {
      state.deleteReservationStatus = RequestStatus.Idle;
    },
  },
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
        state.deleteReservationStatus = RequestStatus.Pending;
      })
      .addCase(deleteReservation.fulfilled, (state) => {
        state.deleteReservationStatus = RequestStatus.Success;
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.deleteReservationStatus = RequestStatus.Rejected;
      });
  },
});

export const { resetDeleteReservationStatus } = reservationData.actions;
