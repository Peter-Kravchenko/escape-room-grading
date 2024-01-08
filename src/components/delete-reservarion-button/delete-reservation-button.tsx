import { useEffect } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteReservation, fetchReservations } from '../../store/api-actions';
import { getDeleteReservationStatus } from '../../store/reservation-data/reservation-data.selectors';
import { resetDeleteReservationStatus } from '../../store/reservation-data/reservation-data.slice';
import { TReservation } from '../../types/reservations';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';

type DeleteReservationProps = {
  id: TReservation['id'];
};

function DeleteReservationButton({ id }: DeleteReservationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteReservationStatus = useAppSelector(getDeleteReservationStatus);

  useEffect(() => {
    if (deleteReservationStatus === RequestStatus.Rejected) {
      toast.error(
        'Не удалось отменить бронироваие квеста. Попробуйте ещё раз.'
      );
    }
    if (deleteReservationStatus === RequestStatus.Success) {
      dispatch(fetchReservations());
    }
    dispatch(resetDeleteReservationStatus());
  }, [dispatch, deleteReservationStatus]);

  if (deleteReservationStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <button
      className="btn btn--accent btn--secondary quest-card__btn"
      type="button"
      onClick={() => {
        dispatch(deleteReservation(id));
      }}
    >
      Отменить
    </button>
  );
}

export default DeleteReservationButton;
