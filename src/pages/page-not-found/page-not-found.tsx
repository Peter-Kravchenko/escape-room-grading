import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container container--size-l">
          <span className="logo header__logo">
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo" />
            </svg>
          </span>
        </div>
      </header>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1
              className="title title--size-s page-content__title"
              style={{ textAlign: 'center', paddingTop: '150px' }}
            >
              Указанная страница не найдена <br /> <br />
              <Link to={AppRoute.Main} className="link link--active">
                Вернуться на главную
              </Link>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
