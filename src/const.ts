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
  Booking = 'BOOKING',
  Reservation = 'RESERVATION',
  Quest = 'QUEST',
  User = 'USER',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Rejected = 'Rejected',
}
