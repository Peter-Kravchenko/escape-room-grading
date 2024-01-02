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
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow',
}
