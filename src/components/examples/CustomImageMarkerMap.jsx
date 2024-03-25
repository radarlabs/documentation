import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class CustomImageMarkerMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const map = new Radar.ui.map({
      container: 'custom-image-map',
    });

    map.on('load', () => {
      const { lng, lat } = map.getCenter();

      // create HTML div with a background image
      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundImage = 'url(https://placekitten.com/g/100/100/)';
      element.style.width = '100px';
      element.style.height = '100px';

      // add marker to map at map center
      new Radar.ui.marker({ element, text: 'Meow!' })
        .setLngLat([lng, lat])
        .addTo(map);
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="custom-image-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default CustomImageMarkerMap;
