import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
//todo удалить?
function BookButton() {
  return (
    <Link
      to={AppRoute.Booking}
      className="btn btn--accent btn--cta quest-page__btn"
    >
      Забронировать
    </Link>
  );
}

export default BookButton;
