import { IconConfig } from './types/map';

export const DESCRIPTION_LENGTH = 300;

export const TILE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const officeIconConfig: IconConfig = {
  url: '/img/svg/pin-active.svg',
  width: 50,
  height: 50,
  anchorX: 25,
  anchorY: 50,
};

export const defaultIconConfig: IconConfig = {
  url: '/img/svg/pin-default.svg',
  width: 30,
  height: 30,
  anchorX: 15,
  anchorY: 30,
};

export const activeIconConfig: IconConfig = {
  url: '/img/svg/pin-active.svg',
  width: 30,
  height: 30,
  anchorX: 15,
  anchorY: 30,
};

export enum AppRoute {
  Booking = '/booking',
  Contacts = '/contacts',
  Error = '/error-page',
  Login = '/login',
  Main = '/',
  NotFound = '/404',
  Quest = '/quest',
  Reservation = '/reservation',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Quest = '/quest',
  Reservation = '/reservation',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  App = 'APP',
  Quests = 'QUESTS',
  Reservations = 'RESERVATIONS',
  User = 'USER',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Rejected = 'Rejected',
}

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export enum QuestLevel {
  All = 'all',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuestType {
  All = 'all-quests',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const DateRus: Record<Date, string> = {
  [Date.Today]: 'сегодня',
  [Date.Tomorrow]: 'завтра',
} as const;

export const QuestLevelRus: Record<QuestLevel, string> = {
  [QuestLevel.All]: 'Все',
  [QuestLevel.Easy]: 'Легкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
} as const;

export const QuestTypeRus: Record<QuestType, string> = {
  [QuestType.All]: 'Все',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.Detective]: 'Детектив',
  [QuestType.SciFi]: 'Sci-Fi',
} as const;
