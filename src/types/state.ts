import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { TQuestBooking, TQuestBookings } from './booking';
import { TQuestFull, TQuests } from './quest';
import { TReservations } from './reservations';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAppProcess = {
  questTypes: TQuestFull['type'][];
  activeQuestType: TQuestFull['type'] | null;
  questLevels: TQuestFull['level'][];
  activeQuestLevel: TQuestFull['level'] | null;
};

export type TQuestsData = {
  quest: TQuestFull | null;
  quests: TQuests;
  questBookings: TQuestBookings;
  selectedLocatoin: TQuestBooking | null;
  questFetchingStatus: RequestStatus;
  questsFetchingStatus: RequestStatus;
  questBookingsFetchingStatus: RequestStatus;
  addToBookingFetchingStatus: RequestStatus;
};

export type TReservationData = {
  reservations: TReservations;
  reservationFetchingStatus: RequestStatus;
  deleteReservationStatus: RequestStatus;
};

export type TUserData = {
  user: TUser | null;
  loginStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};
