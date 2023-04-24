import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';

function PageNotFound () : JSX.Element {

  return (
    <>
      <p>Page not found</p>
      <Link to={AppRoute.Main}>Go to main</Link>
    </>
  );
}

export default PageNotFound;
