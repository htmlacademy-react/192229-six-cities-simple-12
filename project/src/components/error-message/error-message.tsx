import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { getError } from '../../store/city-process/selector';
import './error-message.css';

export function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}


