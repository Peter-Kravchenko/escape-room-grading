import { AxiosError, AxiosInstance } from 'axios';
import { TAppDispatch, TAppState } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TQuestFull, TQuests } from '../types/quest';
import { APIRoute, NameSpace } from '../const';
import {
  TBookingPlaces,
  TQuestBooking,
  TQuestBookings,
} from '../types/booking';
import { TReservation, TReservations } from '../types/reservations';
import { TAuthData, TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { toast } from 'react-toastify';

type TExtra = {
  dispatch: TAppDispatch;
  state: TAppState;
  extra: AxiosInstance;
};

export const fetchQuests = createAsyncThunk<TQuests, undefined, TExtra>(
  `${NameSpace.Quests}/fetchQuests`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TQuests>(APIRoute.Quest)
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
    return data;
  }
);

export const fetchQuest = createAsyncThunk<
  TQuestFull,
  TQuestFull['id'],
  TExtra
>(`${NameSpace.Quests}/fetchQuest`, async (questId, { extra: api }) => {
  const { data } = await api
    .get<TQuestFull>(`${APIRoute.Quest}/${questId}`)
    .catch((e: AxiosError) => {
      throw toast.error(e.message);
    });
  return data;
});

export const fetchQuestBookings = createAsyncThunk<
  TQuestBookings,
  TQuestFull['id'],
  TExtra
>(`${NameSpace.Quests}/fetchQuestBookings`, async (questId, { extra: api }) => {
  const { data } = await api
    .get<TQuestBookings>(`${APIRoute.Quest}/${questId}/booking`)
    .catch((e: AxiosError) => {
      throw toast.error(e.message);
    });
  return data;
});

export const addToBooking = createAsyncThunk<
  void,
  { currentData: TBookingPlaces; questId: TQuestBooking['id'] },
  TExtra
>(
  `${NameSpace.Quests}/questBooking`,
  async ({ currentData, questId }, { extra: api }) => {
    await api
      .post<TBookingPlaces>(`${APIRoute.Quest}/${questId}/booking`, currentData)
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
  }
);

export const fetchReservations = createAsyncThunk<
  TReservations,
  undefined,
  TExtra
>(
  `${NameSpace.Reservations}/fetchReservations`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TReservations>(APIRoute.Reservation)
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
    return data;
  }
);

export const deleteReservation = createAsyncThunk<
  void,
  TReservation['id'],
  TExtra
>(
  `${NameSpace.Reservations}/deleteReservation`,
  async (reservationId, { extra: api }) => {
    await api
      .delete<TReservation['id']>(`${APIRoute.Reservation}/${reservationId}`)
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
  }
);

export const checkAuth = createAsyncThunk<TUser, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TUser>(APIRoute.Login)
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
    return data;
  }
);

export const login = createAsyncThunk<TUser, TAuthData, TExtra>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api
      .post<TUser>(APIRoute.Login, {
        email,
        password,
      })
      .catch((e: AxiosError) => {
        throw toast.error(e.message);
      });
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, TExtra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).catch((e: AxiosError) => {
      throw toast.error(e.message);
    });
    dropToken();
  }
);
