import { Date } from '../const';
import { TLocation } from './booking';
import { TQuest } from './quest';

export type TReservation = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: TLocation;
  quest: TQuest;
};

export type TReservations = TReservation[];
