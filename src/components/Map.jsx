import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class Map extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const map = new Radar.ui.map({
      container: 'default-map',
      center: [-73.9911, 40.7342], // NYC
      zoom: 14,
    });

    Radar.ui.marker({ text: 'Radar HQ' })
      .setLngLat([-73.9910078, 40.7342465])
      .addTo(map);
  }

  render() {
    return (
      <div id="map-container" style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '95%' }}>
        <div id="default-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default Map;
