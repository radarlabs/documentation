import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class FitBoundsMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const map = Radar.ui.map({
      container: 'fit-bounds-map',
    });

    // add marker on map click
    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      // create marker from click location
      const marker = Radar.ui.marker()
        .setLngLat([lng, lat])
        .addTo(map);

      // add listener to remove on click
      marker.on('click', (_) => {
        marker.remove();
        map.fitToMarkers({ maxZoom: 14, padding: 80 }); // refit after marker removed
      });

      // fit map to markers
      map.fitToMarkers({ maxZoom: 14, padding: 80 });
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="fit-bounds-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default FitBoundsMap;
