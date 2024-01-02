import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Quest from '../../pages/quest/quest';
import Login from '../../pages/login/login';
import Booking from '../../pages/booking/booking';
import Reservation from '../../pages/reservation/reservation';
import Contacts from '../../pages/contacts/contacts';
import Layout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Quest} element={<Quest />} />
          <Route path={AppRoute.Booking} element={<Booking />} />
          <Route path={AppRoute.Reservation} element={<Reservation />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
