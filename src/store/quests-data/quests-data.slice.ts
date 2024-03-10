import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TQuestsData } from '../../types/state';
import {
  addToBooking,
  fetchQuest,
  fetchQuestBookings,
  fetchQuests,
} from '../api-actions';
import { TQuestBooking } from '../../types/booking';

const initialState: TQuestsData = {
  quest: null,
  quests: [],
  questBookings: [],
  selectedLocatoin: null,
  questFetchingStatus: RequestStatus.Idle,
  questsFetchingStatus: RequestStatus.Idle,
  questBookingsFetchingStatus: RequestStatus.Idle,
  addToBookingFetchingStatus: RequestStatus.Idle,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setSelectedLocation: (
      state,
      action: PayloadAction<TQuestBooking | null>
    ) => {
      state.selectedLocatoin = action.payload;
    },
    resetAddToBookingFetchingStatus: (state) => {
      state.addToBookingFetchingStatus = RequestStatus.Idle;
    },
  },
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
        state.selectedLocatoin = action.payload[0];
      })
      .addCase(fetchQuestBookings.rejected, (state) => {
        state.questBookingsFetchingStatus = RequestStatus.Rejected;
      })
      .addCase(addToBooking.pending, (state) => {
        state.addToBookingFetchingStatus = RequestStatus.Pending;
      })
      .addCase(addToBooking.fulfilled, (state) => {
        state.addToBookingFetchingStatus = RequestStatus.Success;
      })
      .addCase(addToBooking.rejected, (state) => {
        state.addToBookingFetchingStatus = RequestStatus.Rejected;
      });
  },
});

export const { setSelectedLocation, resetAddToBookingFetchingStatus } =
  questsData.actions;
