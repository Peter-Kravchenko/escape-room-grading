import { AxiosError, AxiosInstance } from 'axios';
import { TAppDispatch, TAppState } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TQuest, TQuests } from '../types/quest';
import { APIRoute, NameSpace } from '../const';
import { toast } from 'react-toastify';
import { TBookingInfo, TQuestBookings } from '../types/booking';
import { TReservation, TReservations } from '../types/reservations';
import { TAuthData, TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';

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
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const fetchQuest = createAsyncThunk<TQuest, TQuest['id'], TExtra>(
  `${NameSpace.Quests}/fetchQuest`,
  async (questId, { extra: api }) => {
    const { data } = await api
      .get<TQuest>(`${APIRoute.Quest}/${questId}`)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const fetchQuestBookings = createAsyncThunk<
  TQuestBookings,
  TQuestBookings['id'],
  TExtra
>(`${NameSpace.Quests}/fetchQuestBookings`, async (questId, { extra: api }) => {
  const { data } = await api
    .get<TQuestBookings>(`${APIRoute.Quest}/${questId}/booking`)
    .catch((err: AxiosError) => {
      throw toast.error(err.message);
    });
  return data;
});

export const addToBooking = createAsyncThunk<
  TBookingInfo,
  TQuestBookings['id'],
  TExtra
>(`${NameSpace.Quests}/questBooking`, async (questId, { extra: api }) => {
  const { data } = await api
    .post<TBookingInfo>(`${APIRoute.Quest}/${questId}/booking`)
    .catch((err: AxiosError) => {
      throw toast.error(err.message);
    });
  return data;
});

export const fetchReservations = createAsyncThunk<
  TReservations,
  undefined,
  TExtra
>(
  `${NameSpace.Reservations}/fetchReservations`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TReservations>(APIRoute.Reservation)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const deleteReservation = createAsyncThunk<
  TReservations,
  TReservation['id'],
  TExtra
>(
  `${NameSpace.Reservations}/deleteReservation`,
  async (reservationId, { extra: api }) => {
    const { data } = await api
      .delete<TReservation['id']>(`${APIRoute.Reservation}/${reservationId}`)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    return data;
  }
);

export const checkAuth = createAsyncThunk<TUser, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { extra: api }) => {
    const { data } = await api
      .get<TUser>(APIRoute.Login)
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
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
      .catch((err: AxiosError) => {
        throw toast.error(err.message);
      });
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, TExtra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout).catch((err: AxiosError) => {
      throw toast.error(err.message);
    });
    dropToken();
  }
);
