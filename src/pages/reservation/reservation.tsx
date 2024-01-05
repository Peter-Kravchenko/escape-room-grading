import { useEffect } from 'react';
import ReservationCard from '../../components/reservation-card/reservation-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReservations } from '../../store/reservation-data/reservation-data.selectors';
import { fetchReservations } from '../../store/api-actions';

function Reservation(): JSX.Element {
  const dispatch = useAppDispatch();
  const userReservations = useAppSelector(getReservations);

  return (
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
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        <div className="cards-grid">
          {userReservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Reservation;
