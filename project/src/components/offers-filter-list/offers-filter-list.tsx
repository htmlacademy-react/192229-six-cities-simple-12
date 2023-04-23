
import { OffersFilterOption } from '../offers-filter-option/offers-filter-option';
import { OffersFilterOptionProp } from '../../types/offers-list';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { changeFilterIsOpen } from '../../store/city-process/city-process';
import { getIsFilterOpen, getSelectedOption } from '../../store/city-process/selector';


type OffersFilterListProp = {
    options: OffersFilterOptionProp[];
}

export function OffersFilterList ({options} : OffersFilterListProp) : JSX.Element {
  // const [isSortOpen, setSortState] = useState<boolean>(false);
  const isSortOpen = useAppSelector(getIsFilterOpen);
  const activeFilter = useAppSelector(getSelectedOption);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={activeFilter.tabIndex} onClick={()=>dispatch(changeFilterIsOpen())}>
        {activeFilter.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
        {options.map((option)=>
          <OffersFilterOption key={option.tabIndex} {...option}/>
        )}
      </ul>
    </>
  );
}
