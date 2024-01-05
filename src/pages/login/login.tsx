import { useEffect, useState } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLoginStatus } from '../../store/user-data/user-data.selectors';
import { TAuthData } from '../../types/user';
import { login } from '../../store/api-actions';
import { toast } from 'react-toastify';
import { resetLoginStatus } from '../../store/user-data/user-data.slice';

const EMAIL_INVALID_MESSAGE =
  'Пожалуйста введите валидный адрес электронной почты';
const PASSWORD_INVALID_MESSAGE = 'Пароль должен содержать одну букву и цифру';

const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/;

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginSendingStatus = useAppSelector(getLoginStatus);

  const isUIBlocked = loginSendingStatus === RequestStatus.Pending;

  const [formData, setFormData] = useState<TAuthData>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState({ email: true, password: true });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailPattern.test(formData.email)) {
      setErrorMessage(EMAIL_INVALID_MESSAGE);
      setIsValid({ email: false, password: true });
    } else if (!passwordPattern.test(formData.password)) {
      setErrorMessage(PASSWORD_INVALID_MESSAGE);
      setIsValid({ email: true, password: false });
    } else {
      dispatch(login({ email: formData.email, password: formData.password }));
    }
  };

  useEffect(() => {
    if (loginSendingStatus === RequestStatus.Success) {
      setFormData({
        email: '',
        password: '',
      });
    }
    if (loginSendingStatus === RequestStatus.Rejected) {
      toast.error('Произошла ошибка при попытке входа, попробуйте еще раз');
    }
    dispatch(resetLoginStatus());
  }, [loginSendingStatus, dispatch]);

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
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={handleFormSubmit}
            noValidate
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">
                    E&nbsp;–&nbsp;mail
                  </label>
                  <input
                    onChange={handleFormChange}
                    value={formData.email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                    required
                    disabled={isUIBlocked}
                  />
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    onChange={handleFormChange}
                    value={formData.password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    required
                    disabled={isUIBlocked}
                  />
                </div>
              </div>
              <button
                className="btn btn--accent btn--general login-form__submit"
                type="submit"
                disabled={isUIBlocked}
              >
                {isUIBlocked ? 'Входим...' : 'Войти'}
              </button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
                disabled={isUIBlocked}
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
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
