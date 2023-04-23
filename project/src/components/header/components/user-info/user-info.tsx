import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/use-app-selector/use-app-selector';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { logoutAction } from '../../../../store/api-actions';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import { getAuthorizationStatus, getUserData } from '../../../../store/user-process/selector';


export function UserInfo (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  return(
    authorizationStatus === AuthorizationStatus.Auth ?
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{userData?.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#todo" onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </>
      :
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
  );
}
