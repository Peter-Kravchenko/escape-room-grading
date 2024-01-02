import { Date } from '../const';

export type TLocation = {
  address: string;
  coords: [number, number];
};

type TSlot = {
  time: string;
  isAvailable: boolean;
};

export type TQuestBookings = {
  id: string;
  location: TLocation;
  slots: {
    today: [TSlot];
    tomorrow: [TSlot];
  }[];
};

export type TBookingInfo = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};
