import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import { AppRoute, AuthorizationStatus } from '../const';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offers-list';

type AppOfferProps = {
  placesCount: number;
  offers: Offer[];
};

function App({placesCount,offers} : AppOfferProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Property} element={<Property offers={offers}/>} />
        </Route>
        <Route path={AppRoute.Login} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Login /></PrivateRoute>} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
