import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TQuestsData } from '../../types/state';
import { NameSpace } from '../../const';

export const getQuest = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.quest
);

export const getQuests = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.quests
);

export const getQuestBookings = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.questBookings
);

export const getSelectedLocation = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.selectedLocatoin
);

export const getQuestFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.questFetchingStatus
);

export const getQuestsFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.questsFetchingStatus
);

export const getQuestBookingsFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Quests],
  (state: TQuestsData) => state.questBookingsFetchingStatus
);
