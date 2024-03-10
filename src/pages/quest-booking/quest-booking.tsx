import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuest, fetchQuestBookings } from '../../store/api-actions';
import {
  getQuest,
  getQuestBookings,
  getQuestBookingsFetchingStatus,
  getQuestFetchingStatus,
} from '../../store/quests-data/quests-data.selectors';
import { RequestStatus } from '../../const';
import BookingForm from '../../components/booking-form/booking-form';
import MapBooking from '../../components/map-booking/map-booking';
import Loader from '../../components/loader/loader';

function QuestBooking(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchQuest(id));
      dispatch(fetchQuestBookings(id));
    }
  }, [dispatch, id]);

  const quest = useAppSelector(getQuest);
  const questLocations = useAppSelector(getQuestBookings);

  const questFetchingStatus = useAppSelector(getQuestFetchingStatus);
  const questLocationsFetchingStatus = useAppSelector(
    getQuestBookingsFetchingStatus
  );

  if (
    questLocationsFetchingStatus === RequestStatus.Pending ||
    questFetchingStatus === RequestStatus.Pending
  ) {
    return <Loader />;
  }

  if (
    !id ||
    !quest ||
    questLocationsFetchingStatus === RequestStatus.Rejected
  ) {
    return <h1>Не удалось загрузить квест</h1>;
  }

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
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">
            {quest.title}
          </p>
        </div>
        <div className="page-content__item">
          <MapBooking questLocations={questLocations} />
        </div>
        <BookingForm questId={id} peopleCount={quest.peopleMinMax} />
      </div>
    </main>
  );
}

export default QuestBooking;
