import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class FitBoundsMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const map = new Radar.ui.map({
      container: 'fit-bounds-map',
    });

    let markers = []; // keep track of markers

    // function to refit the map to the markers
    const refitMap = () => {
      // get bounds for all markers
      const bounds = new Radar.ui.maplibregl.LngLatBounds();
      markers.forEach((m) => {
        bounds.extend(m.getLngLat());
      });

      // fit map to new bounds
      // (add padding to ensure pin is fully in view)
      map.fitBounds(bounds, { maxZoom: 14, padding: 80 });
    };

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      // create marker from click location
      const marker = Radar.ui.marker({ text: 'Radar HQ' })
        .setLngLat([lng, lat])
        .addTo(map);

      markers.push(marker); // add to list of markers
      refitMap();

      // remove marker and refit map when clicked
      marker.getElement().addEventListener('click', (e) => {
        e.stopPropagation();

        // remove marker from map and refit to remaining markers
        const clicked = markers.find((m) => m.getElement().contains(e.target));
        clicked.remove();
        markers = markers.filter((m) => m !== clicked);
        refitMap();
      });
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
