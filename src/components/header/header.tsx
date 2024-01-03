import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import { logout } from '../../store/api-actions';

//todo добавить cn link-active для кнопок

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth =
    useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link
                to={AppRoute.Main}
                onClick={(e) => {
                  // добавить класс link-active
                }}
                className="link"
              >
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.Contacts} className="link">
                Контакты
              </Link>
            </li>
            {isAuth && (
              <li className="main-nav__item">
                <Link to={AppRoute.Reservation} className="link">
                  Мои бронирования
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {isAuth ? (
            <Link
              to={AppRoute.Main}
              onClick={(e) => {
                e.preventDefault();
                dispatch(logout());
              }}
              className="btn btn--accent header__side-item"
            >
              Выйти
            </Link>
          ) : (
            <Link
              to={AppRoute.Login}
              className="btn header__side-item header__login-btn"
            >
              Вход
            </Link>
          )}
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
