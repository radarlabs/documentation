import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

import { route, polyline } from './data';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class RouteMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    // create map
    const map = Radar.ui.map({
      container: 'route-map',
      center: [-73.990550, 40.735225],
    });

    map.on('load', () => {
      // create new feature from polyline
      const polylineFeature = map.addPolyline(polyline, {
        id: 'polyline',
        precision: 6,
        properties: {
          name: 'Polyline Feature',
        },
        paint: {
          'line-color': 'red',
        },
      });

      // create new feature from GeoJSON LineString
      const lineStringFeature = map.addLine(route);

      // create popup when clicking on line
      [polylineFeature, lineStringFeature].forEach((radarFeature) => {
        radarFeature.on('click', ({ feature, originalEvent: event }) => {
          Radar.ui.popup({
            text: feature.properties.name,
          })
          .setLngLat([event.lngLat.lng, event.lngLat.lat])
          .addTo(map);
        });
      });

      // fit the map bounds to the features
      map.fitToFeatures({ padding: 40 });
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="route-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default RouteMap;
