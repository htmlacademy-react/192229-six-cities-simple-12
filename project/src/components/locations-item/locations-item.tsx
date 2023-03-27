import { useState } from 'react';
//import { Link } from 'react-router-dom';

type LocationsItemProp = {
    name: string;
    isActive?: boolean;
}

export function LocationsItem ({name,isActive = false} : LocationsItemProp) : JSX.Element {
  const [activeCity, setActiveCity] = useState<boolean>(isActive);


  return (
    <li className="locations__item">
      <a onClick={(e) => {setActiveCity(!activeCity); }} className={`locations__item-link tabs__item ${activeCity ? 'tabs__item--active' : ''}`} href={`#${name}`}>
        <span>{name}</span>
      </a>
    </li>
  );
}
