import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TQuestsData } from '../../types/state';
import {
  addToBooking,
  fetchQuest,
  fetchQuestBookings,
  fetchQuests,
} from '../api-actions';

const initialState: TQuestsData = {
  quest: null,
  quests: [],
  questBookings: null,
  booking: null,

  questFetchingStatus: RequestStatus.Idle,
  questsFetchingStatus: RequestStatus.Idle,
  questBookingsFetchingStatus: RequestStatus.Idle,
  bookingFetchingStatus: RequestStatus.Idle,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuest.pending, (state) => {
        state.questsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.questsFetchingStatus = RequestStatus.Success;
        state.quest = action.payload;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.questsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchQuests.pending, (state) => {
        state.questsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.questsFetchingStatus = RequestStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.questsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(fetchQuestBookings.pending, (state) => {
        state.questBookingsFetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchQuestBookings.fulfilled, (state, action) => {
        state.questBookingsFetchingStatus = RequestStatus.Success;
        state.questBookings = action.payload;
      })
      .addCase(fetchQuestBookings.rejected, (state) => {
        state.questBookingsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(addToBooking.pending, (state) => {
        state.bookingFetchingStatus = RequestStatus.Pending;
      })
      .addCase(addToBooking.fulfilled, (state, action) => {
        state.bookingFetchingStatus = RequestStatus.Success;
        state.booking = action.payload;
      })
      .addCase(addToBooking.rejected, (state) => {
        state.bookingFetchingStatus = RequestStatus.Rejected;
      });
  },
});
