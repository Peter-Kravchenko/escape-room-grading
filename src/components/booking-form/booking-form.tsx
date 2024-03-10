import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAddToBookingFetchingStatus,
  getSelectedLocation,
} from '../../store/quests-data/quests-data.selectors';
import { TBookingFormValues, TBookingPlaces, TSlot } from '../../types/booking';
import { addToBooking } from '../../store/api-actions';
import { AppRoute, RequestStatus } from '../../const';
import { TQuestFull } from '../../types/quest';
import { useNavigate } from 'react-router-dom';
import { resetAddToBookingFetchingStatus } from '../../store/quests-data/quests-data.slice';
import { useEffect } from 'react';
import { getDate, getTime } from '../../utils/utils';
import { toast } from 'react-toastify';

type BookingFormProps = {
  peopleCount: TQuestFull['peopleMinMax'];
  questId: TQuestFull['id'];
};

function BookingForm({ peopleCount, questId }: BookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedLocation = useAppSelector(getSelectedLocation);
  const formSendingStatus = useAppSelector(getAddToBookingFetchingStatus);
  const isSending = formSendingStatus === RequestStatus.Pending;

  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors, isValid },
  } = useForm<TBookingFormValues>({ mode: 'onBlur' });

  const onFormSubmit: SubmitHandler<TBookingFormValues> = (formData) => {
    const { date, name, tel, person, children } = formData;

    const currentData = {
      date: getDate(date),
      time: getTime(date),
      contactPerson: name,
      phone: tel,
      withChildren: Boolean(children),
      peopleCount: Number(person),
      placeId: selectedLocation?.id,
    } as TBookingPlaces;
    dispatch(addToBooking({ currentData, questId }));
  };

  useEffect(() => {
    resetField('date');
  }, [selectedLocation, resetField]);

  useEffect(() => {
    if (formSendingStatus === RequestStatus.Rejected) {
      toast.error(
        'Не удалось забронировать выбранный квест. Пожалуйста, попробуйте ещё раз.'
      );
    }
    if (formSendingStatus === RequestStatus.Success) {
      navigate(AppRoute.Reservation);
      reset();
    }
    dispatch(resetAddToBookingFetchingStatus());
  }, [dispatch, formSendingStatus, navigate, reset]);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(onFormSubmit)(e);
      }}
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      noValidate
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {selectedLocation?.slots.today.map((slot: TSlot) => (
              <label
                key={`today${slot.time}`}
                className="custom-radio booking-form__date"
              >
                <input
                  value={`today${slot.time}`}
                  type="radio"
                  id={`today${slot.time}`}
                  disabled={!slot.isAvailable || isSending}
                  {...register('date', {
                    required: ' Выберите удобное время квеста',
                  })}
                />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {selectedLocation?.slots.tomorrow.map((slot: TSlot) => (
              <label
                key={`tomorrow${slot.time}`}
                className="custom-radio booking-form__date"
              >
                <input
                  value={`tomorrow${slot.time}`}
                  type="radio"
                  id={`tomorrow${slot.time}`}
                  disabled={!slot.isAvailable || isSending}
                  {...register('date', {
                    required: 'Выберите удобное время квеста',
                  })}
                />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
          {errors.date && (
            <p className="error" style={{ color: 'red' }}>
              {errors.date?.message}
            </p>
          )}
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            disabled={isSending}
            {...register('name', {
              required: 'Укажите ваше имя',
              pattern: {
                value: /[А-Яа-яЁёA-Za-z]{1,15}/,
                message: 'Некорректное имя',
              },
            })}
          />
          {errors.name && (
            <p className="error" style={{ color: 'red' }}>
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            disabled={isSending}
            {...register('tel', {
              required: 'Укажите телефонный номер',
              pattern: {
                value: /^((\+7))(\(\d{3}\))(\d{3}-)(\d{2}-)(\d{2})$/,
                message: 'Пожалуйста, введите номер в формате +7(999)999-99-99',
              },
            })}
          />
          {errors.tel && (
            <p className="error" style={{ color: 'red' }}>
              {errors.tel?.message}
            </p>
          )}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
            Количество участников
          </label>
          <input
            id="person"
            placeholder={`Количество участников от ${peopleCount[0]} до ${peopleCount[1]}`}
            disabled={isSending}
            {...register('person', {
              required: 'Укажите количество участников',
              min: {
                value: peopleCount[0],
                message: `Минимальное количество участников ${peopleCount[0]}`,
              },
              max: {
                value: peopleCount[1],
                message: `Максимальное количество участников ${peopleCount[1]}`,
              },
            })}
          />
          {errors.person && (
            <p className="error" style={{ color: 'red' }}>
              {errors.person?.message}
            </p>
          )}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            disabled={isSending}
            {...register('children')}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={isSending || !isValid}
      >
        {isSending ? 'Бронируем...' : 'Забронировать'}
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="agreement"
          disabled={isSending}
          {...register('agreement', {
            required:
              'Для продолжения необходимо дать согласие с правилами обработки персональных данных и пользовательским соглашением',
          })}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональных данных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
      {errors.agreement && (
        <p className="error" style={{ color: 'red' }}>
          {errors.agreement?.message}
        </p>
      )}
    </form>
  );
}

export default BookingForm;
