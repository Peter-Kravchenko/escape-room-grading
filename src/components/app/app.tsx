import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import QuestDetails from '../../pages/quest-details/quest-datails';
import Login from '../../pages/login/login';
import Booking from '../../pages/booking/booking';
import Reservation from '../../pages/reservation/reservation';
import Contacts from '../../pages/contacts/contacts';
import Layout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={`${AppRoute.Quest}/:id`} element={<QuestDetails />} />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Reservation}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
