import { QuestLevel, QuestType } from '../const';

export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
};

export type TQuests = TQuest[];

export type TQuestFull = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};
