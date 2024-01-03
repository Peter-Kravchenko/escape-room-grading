import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { TBookingInfo, TQuestBookings } from './booking';
import { TQuest, TQuests } from './quest';
import { TReservations } from './reservations';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppProcess = {
  questTypes: TQuest['type'][];
  activeQuestType: TQuest['type'] | null;
  questLevels: TQuest['level'][];
  activeQuestLevel: TQuest['level'] | null;
};

export type TQuestsData = {
  quest: TQuest | null;
  quests: TQuests[];
  questBookings: TQuestBookings | null;
  bookingInfo: TBookingInfo | null;
  questFetchingStatus: RequestStatus;
  questsFetchingStatus: RequestStatus;
  questBookingsFetchingStatus: RequestStatus;
  bookingFetchingStatus: RequestStatus;
};

export type TReservationData = {
  reservations: TReservations;
  reservationFetchingStatus: RequestStatus;
};

export type TUserData = {
  user: TUser | null;
  loginStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};
