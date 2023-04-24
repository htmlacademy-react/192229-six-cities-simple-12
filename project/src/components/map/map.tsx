import { useEffect, useRef } from 'react';
import { Offer, OfferCity } from '../../types/offers-list';
import { useMap } from '../../hooks/use-map/use-map';
import L, { LayerGroup, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import 'leaflet/dist/leaflet.css';

type MapLocationProps = {
  city: OfferCity;
  points: Offer[];
  activeCard?: number | null;
  height: string;
};

export function Map({city, points, activeCard = null, height = '794px'}: MapLocationProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const layer = new LayerGroup();

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
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        { animate: true, duration: 2 }
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {

      points.forEach((point) => {

        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(
          activeCard === point.id ? currentCustomIcon : defaultCustomIcon
        );

        layer.addLayer(marker);

      });
      layer.addTo(map);

    }

    return () => {
      layer.clearLayers();
    };


  }, [map, points, activeCard]);

  return (
    <div style={{height: height }} ref={mapRef}></div>
  );
}
