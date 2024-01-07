import { DESCRIPTION_LENGTH } from '../const';
import { TQuest } from '../types/quest';

export const getDate = (date: string) => date.slice(0, -5);

export const getTime = (date: string) => date.slice(-5);

export const getAdressWrap = (adress: string) => {
  const i = adress.indexOf('м.');
  return {
    start: adress.slice(0, i),
    end: adress.slice(i),
  };
};

export const limitDescriptionLength = (description: TQuest['description']) => {
  if (description.length > DESCRIPTION_LENGTH) {
    return `${description.slice(0, DESCRIPTION_LENGTH)}...`;
  }
  return description;
};
