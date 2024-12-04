import React from 'react';
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
import * as turf from '@turf/turf';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class RadarMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const NEW_YORK = [-73.9911, 40.7342];
    const LISBON = [-9.135131,38.714637];

    // create map
    const map = Radar.ui.map({
      container: 'arc-map',
    });

    map.on('load', () => {
      // add the arc to the map
      const greatCircle = turf.greatCircle(NEW_YORK, LISBON);
      map.addLine(greatCircle);

      // add markers to the map
      const marker1 = Radar.ui.marker()
        .setLngLat(NEW_YORK)
        .addTo(map);

      const marker2 = Radar.ui.marker()
        .setLngLat(LISBON)
        .addTo(map);

      // fit the map bounds to the features
      map.fitToFeatures({padding: 60});
    });   
    
}

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="arc-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default RadarMap; 
