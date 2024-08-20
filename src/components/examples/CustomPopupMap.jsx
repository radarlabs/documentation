import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class CustomPopupMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    // create map
    const map = Radar.ui.map({
      container: 'custom-popup-map',
      center: [-73.990550, 40.735225],
      zoom: 16,
    });

    map.on('load', () => {

      // Create a marker with a custom popup using HTML
      Radar.ui.marker({
        popup: {
          html: `
            <div style="text-align: center;">
              <h3>The Roosevelt Building</h3>
              <img width="100" src="https://images.ctfassets.net/f2vbu16fzuly/5VZ6BEW5Ju6kL4OeooR2YG/4e694ad24b8d57c6b9958de79976d89e/Screenshot_2024-07-15_at_9.43.45_AM.png?w=400" />
            </div>
          `,
        },
      })
      .setLngLat([-73.9910078, 40.7342465])
      .addTo(map);

      // Create a marker with a custom popup using a DOM element
      const element = document.getElementById('custom-popup').cloneNode(true /* deep */);
      element.style.visibility = 'visible';
      element.id = 'custom-popup-1';

      Radar.ui.marker({
        popup: {
          element,
        },
      })
      .setLngLat([-73.990389, 40.735862])
      .addTo(map);
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="custom-popup-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />

        <div id="custom-popup" style={{ visibility: 'hidden', textAlign: 'center'}}>
          <h3>Union Square</h3>
          <img width="100" src="https://images.ctfassets.net/f2vbu16fzuly/7BUSW7MAtT2abUQY8U3Ri6/11fb8b92fd24c326bfd5da3064d67666/union_square.jpg?w=600" />
        </div>
      </div>
    );
  }
};

export default CustomPopupMap;
