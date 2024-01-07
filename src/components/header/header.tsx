import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import { logout } from '../../store/api-actions';
import cn from 'classnames';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
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
                className={cn('link', {
                  active: location.pathname === AppRoute.Main,
                })}
                to={AppRoute.Main}
              >
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                className={cn('link', {
                  active: location.pathname === AppRoute.Contacts,
                })}
                to={AppRoute.Contacts}
              >
                Контакты
              </Link>
            </li>
            {isAuth && (
              <li className="main-nav__item">
                <Link
                  className={cn('link', {
                    active: location.pathname === AppRoute.Reservation,
                  })}
                  to={AppRoute.Reservation}
                >
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
