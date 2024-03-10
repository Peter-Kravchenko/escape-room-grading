import { Date } from '../const';

export type TLocation = {
  address: string;
  coords: [number, number];
};

export type TSlot = {
  time: string;
  isAvailable: boolean;
};

export type TQuestBooking = {
  id: string;
  location: TLocation;
  slots: {
    today: [TSlot];
    tomorrow: [TSlot];
  };
};

export type TQuestBookings = TQuestBooking[];

export type TBookingPlaces = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type TBookingFormValues = {
  date: Date;
  name: string;
  tel: string;
  person: number;
  children: boolean;
  agreement: boolean;
};
