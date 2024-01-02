import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TUserData } from '../../types/state';
import { NameSpace } from '../../const';

export const getUser = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.user
);

export const getLoginStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.loginStatus
);

export const getAuthorizationStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.authorizationStatus
);
