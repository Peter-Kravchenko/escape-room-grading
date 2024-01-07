import { useEffect } from 'react';
import ReservationCard from '../../components/reservation-card/reservation-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getReservationFetchingStatus,
  getReservations,
} from '../../store/reservation-data/reservation-data.selectors';
import { fetchReservations } from '../../store/api-actions';
import { RequestStatus } from '../../const';
import Loader from '../../components/loader/loader';

function MyReservations(): JSX.Element {
  const dispatch = useAppDispatch();
  const userReservations = useAppSelector(getReservations);
  const userReservationsFetchingStatus = useAppSelector(
    getReservationFetchingStatus
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (
    userReservationsFetchingStatus === RequestStatus.Pending ||
    !userReservations
  ) {
    return <Loader />;
  }

  return (
    userReservations && (
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
          {userReservations.length === 0 && (
            <h1 className="title--size-s">
              Вы еще не забронировали ни одного квеста
            </h1>
          )}
        </div>
      </main>
    )
  );
}

export default MyReservations;
