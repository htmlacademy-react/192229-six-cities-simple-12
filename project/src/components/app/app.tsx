import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import { AppRoute } from '../const';
import { Routes, Route} from 'react-router-dom';
import Layout from '../layout/layout';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import PrivateRoute from '../private-route/private-route';
// import { Offer } from '../../types/offers-list';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';


store.dispatch(fetchOffersAction());
// store.dispatch(checkAuthAction());

function App(): JSX.Element {
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);


  // if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Property} element={<Property />} />
        </Route>
        <Route path={AppRoute.Login} element={<PrivateRoute><Login /></PrivateRoute>} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
