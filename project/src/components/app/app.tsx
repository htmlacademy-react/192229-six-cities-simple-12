import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import { AppRoute, AuthorizationStatus } from '../const';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layuout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';

type AppOfferProps = {
  placesCount: number;
};

function App({placesCount} : AppOfferProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Layuout /></PrivateRoute>}>
          <Route index element={<MainPage placesCount ={placesCount}/>} />
          <Route path={AppRoute.Property} element={<Property />} />
        </Route>

        <Route path={AppRoute.Login} element={<Login />} />

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
