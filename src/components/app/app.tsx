import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import QuestDetails from '../../pages/quest-details/quest-datails';
import Login from '../../pages/login/login';
import QuestBooking from '../../pages/quest-booking/quest-booking';
import Reservation from '../../pages/reservation/reservation';
import Contacts from '../../pages/contacts/contacts';
import Layout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={`${AppRoute.Quest}/:id`} element={<QuestDetails />} />
          <Route
            path={`${AppRoute.Quest}/:id/booking`}
            element={
              <PrivateRoute authorizationStatus={authStatus}>
                <QuestBooking />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Reservation}
            element={
              <PrivateRoute authorizationStatus={authStatus}>
                <Reservation />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
