import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TAppProcess, TAppState } from '../../types/state';

export const getActiveQuestType = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.activeQuestType
);

export const getActiveQuestLevel = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.activeQuestLevel
);
