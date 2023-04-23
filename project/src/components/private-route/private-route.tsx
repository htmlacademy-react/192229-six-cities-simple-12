import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getAuthorizationStatus } from '../../store/user-process/selector';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default PrivateRoute;
