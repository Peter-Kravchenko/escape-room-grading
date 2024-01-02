import { TLocation } from './booking';
import { TQuests } from './quest';

export type TReservation = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: TLocation;
  quest: TQuests;
};

export type TReservations = TReservation[];
