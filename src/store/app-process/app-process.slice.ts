import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TAppProcess } from '../../types/state';
import { NameSpace, QuestLevel, QuestType } from '../../const';

const initialState: TAppProcess = {
  questTypes: [],
  activeQuestType: QuestType.All,
  questLevels: [],
  activeQuestLevel: QuestLevel.All,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveQuestType: (state, action: PayloadAction<QuestType | null>) => {
      state.activeQuestType = action.payload;
    },
    setActiveQuestLevel: (state, action: PayloadAction<QuestLevel | null>) => {
      state.activeQuestLevel = action.payload;
    },
    resetFilters: (state) => {
      state.activeQuestType = QuestType.All;
      state.activeQuestLevel = QuestLevel.All;
    },
  },
});

export const { setActiveQuestType, setActiveQuestLevel, resetFilters } =
  appProcess.actions;
