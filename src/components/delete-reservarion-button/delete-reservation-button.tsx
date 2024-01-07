import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteReservation, fetchReservations } from '../../store/api-actions';
import { getDeleteReservationStatus } from '../../store/reservation-data/reservation-data.selectors';
import { TReservation } from '../../types/reservations';
import Loader from '../loader/loader';

type DeleteReservationProps = {
  id: TReservation['id'];
};

function DeleteReservationButton({ id }: DeleteReservationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteReservationStatus = useAppSelector(getDeleteReservationStatus);

  if (deleteReservationStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <button
      className="btn btn--accent btn--secondary quest-card__btn"
      type="button"
      onClick={() => {
        dispatch(deleteReservation(id));
        dispatch(fetchReservations());
      }}
    >
      Отменить
    </button>
  );
}

export default DeleteReservationButton;
