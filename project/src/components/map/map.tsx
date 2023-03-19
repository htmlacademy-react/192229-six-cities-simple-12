import { useEffect, useRef } from 'react';
import { City, Point } from '../../types/offers-list';
import { useMap } from '../../hooks/use-map/use-map';
import L from 'leaflet';
import { URL_MARKER_DEFAULT } from '../const';


type MapLocationProps = {
  city: City;
  points: Point[];
};

export function Map({city, points}: MapLocationProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = L.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 27],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = L.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        L
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map" ref={mapRef}>

    </section>
  );
}
