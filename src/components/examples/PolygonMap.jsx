import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class PolygonMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    // create map
    const map = Radar.ui.map({
      container: 'polygon-map',
      center: [-73.990550, 40.735225],
      zoom: 10,
    });

    map.on('load', () => {
      // create new feature from GeoJSON Feature
      const geojson = {
        type: 'Feature',
        id: 1,
        properties: {
          name: 'Central Park',
        },
        geometry: {
          type: 'Polygon',
          coordinates: [[[-73.95820498349376,40.80026256420331],[-73.9816545434309,40.76824212209061],[-73.97283590550576,40.764244806438285],[-73.94918592197929,40.79677293396304],[-73.95820498349376,40.80026256420331]]]
        },
      };

      const feature = map.addPolygon(geojson)

      feature.on('click', ({ feature, originalEvent: event }) => {
        Radar.ui.popup({
          text: feature.properties.name,
        })
        .setLngLat([event.lngLat.lng, event.lngLat.lat])
        .addTo(map);
      });

      // fit the map bounds to the features
      map.fitToFeatures({ padding: 40, animate: false });
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="polygon-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default PolygonMap;
