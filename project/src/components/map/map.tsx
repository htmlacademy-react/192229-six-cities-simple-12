import { useEffect, useRef } from 'react';
import { City, Offer } from '../../types/offers-list';
import { useMap } from '../../hooks/use-map/use-map';
import L from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import 'leaflet/dist/leaflet.css';


type MapLocationProps = {
  city: City;
  points: Offer[];
  activeCard: number | null;
};

export function Map({city, points, activeCard}: MapLocationProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = L.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 27],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = L.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 27],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        L
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: activeCard === point.id ? currentCustomIcon : defaultCustomIcon ,
          })
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);

  return (
    <section className="cities__map map" ref={mapRef}>

    </section>
  );
}
