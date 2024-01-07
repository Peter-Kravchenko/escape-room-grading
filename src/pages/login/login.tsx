import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAuthorizationStatus,
  getLoginStatus,
} from '../../store/user-data/user-data.selectors';
import { TAuthData, TLoginFormValues } from '../../types/user';
import { checkAuth, login } from '../../store/api-actions';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { resetLoginStatus } from '../../store/user-data/user-data.slice';

const EMAIL_INVALID_MESSAGE =
  'Пожалуйста введите валидный адрес электронной почты';
const PASSWORD_INVALID_MESSAGE = 'Пароль должен содержать одну букву и цифру';

const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{3,15}$)/;

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginSendingStatus = useAppSelector(getLoginStatus);
  const isSending = loginSendingStatus === RequestStatus.Pending;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(-1);
    }
  }, [authorizationStatus, dispatch, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TLoginFormValues>({
    mode: 'onBlur',
  });

  const onFormSubmit: SubmitHandler<TLoginFormValues> = (
    formData: TAuthData
  ) => {
    dispatch(login({ email: formData.email, password: formData.password }));
    dispatch(resetLoginStatus());
    dispatch(checkAuth());
    reset();
    navigate(-1);
  };

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-size-m.jpg"
            srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
            width={1366}
            height={768}
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            onSubmit={(e) => {
              handleSubmit(onFormSubmit)(e);
            }}
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            noValidate
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">
                    E&nbsp;–&nbsp;mail
                    {errors.email && (
                      <p className="error" style={{ color: 'red' }}>
                        {errors.email?.message}
                      </p>
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Адрес электронной почты"
                    disabled={isSending}
                    {...register('email', {
                      pattern: {
                        value: emailPattern,
                        message: EMAIL_INVALID_MESSAGE,
                      },
                    })}
                  />
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    disabled={isSending}
                    {...register('password', {
                      minLength: {
                        value: 3,
                        message: 'Минимальная длина 3 символа',
                      },
                      maxLength: {
                        value: 15,
                        message: 'Максимальная длина 15 символов',
                      },
                      pattern: {
                        value: passwordPattern,
                        message: PASSWORD_INVALID_MESSAGE,
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="error" style={{ color: 'red' }}>
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                className="btn btn--accent btn--general login-form__submit"
                type="submit"
                disabled={isSending || !isValid}
              >
                {isSending ? 'Входим...' : 'Войти'}
              </button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
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
                <a
                  className="link link--active-silver link--underlined"
                  href="#"
                >
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
        </div>
      </div>
    </main>
  );
}

export default Login;
