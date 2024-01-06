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

export const QuestLevelsInRus: Record<QuestLevel, string> = {
  [QuestLevel.All]: 'Все',
  [QuestLevel.Easy]: 'Легкий',
  [QuestLevel.Medium]: 'Средний',
  [QuestLevel.Hard]: 'Сложный',
};

export const QuestTypesInRus: Record<QuestType, string> = {
  [QuestType.All]: 'Все',
  [QuestType.Adventures]: 'Приключения',
  [QuestType.Horror]: 'Ужасы',
  [QuestType.Mystic]: 'Мистика',
  [QuestType.Detective]: 'Детектив',
  [QuestType.SciFi]: 'Sci-Fi',
};

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export const TITLE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
