import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { changeFilterIsOpen, setOffersFilter } from '../../store/action';
import { OffersFilterOptionProp } from '../../types/offers-list';


export function OffersFilterOption ({tabIndex, name} : OffersFilterOptionProp) : JSX.Element {
  const isActive = tabIndex === useAppSelector((state) => state.selectedOption.tabIndex);
  const dispatch = useAppDispatch();
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`}
      onClick={() => {
        dispatch(setOffersFilter({tabIndex,name}));
        dispatch(changeFilterIsOpen());
      }} tabIndex={tabIndex}
    >{name}
    </li>
  );
}
