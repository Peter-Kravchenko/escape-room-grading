import { Link } from 'react-router-dom';
import { AppRoute, DateRus, QuestLevelRus } from '../../const';
import { TReservation } from '../../types/reservations';
import DeleteReservationButton from '../delete-reservarion-button/delete-reservation-button';

type ReservationCardProps = {
  reservation: TReservation;
};

function ReservationCard({ reservation }: ReservationCardProps): JSX.Element {
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${reservation.quest.previewImgWebp}, ${reservation.quest.previewImgWebp} 2x`}
          />
          <img
            src={reservation.quest.previewImg}
            srcSet={`${reservation.quest.previewImg} 2x`}
            width={344}
            height={232}
            alt={reservation.quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            to={`${AppRoute.Quest}/${reservation.quest.id}`}
            className="quest-card__link"
          >
            {reservation.quest.title}
          </Link>
          <span className="quest-card__info">
            [{DateRus[reservation.date]},&nbsp;{reservation.time}.{' '}
            {reservation.location.address}]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {reservation.peopleCount} &nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {QuestLevelRus[reservation.quest.level]}
          </li>
        </ul>
        <DeleteReservationButton id={reservation.id} />
      </div>
    </div>
  );
}

export default ReservationCard;
