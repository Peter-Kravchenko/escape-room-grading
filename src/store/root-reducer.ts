import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './user-data/user-data.slice';
import { questsData } from './quests-data/quests-data.slice';
import { reservationData } from './reservation-data/reservation-data.slice';
import { appProcess } from './app-process/app-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.Reservations]: reservationData.reducer,
});
