import React from 'react';
import maplibregl from 'maplibre-gl';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class Map extends React.Component {
  componentDidMount() {
    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.radar.io/maps/styles/radar-default-v1?publishableKey=${PUBLISHABLE_KEY}`,
      center: [-73.9911, 40.7342], // NYC
      zoom: 11
    });

    map.addControl(new maplibregl.NavigationControl());

    new maplibregl.Marker({ color: '#007aff' }).setLngLat([-73.9911, 40.7342]).addTo(map); // Radar HQ
  }

  render() {
    return (
      <div id="map-container" style={{ height: '20rem', margin: '1rem 0', position: 'relative', width: '95%' }}>
        <div id="map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
        <a id="map-watermark" href="https://radar.com" target="_blank" style={{ bottom: 0, height: '38px', left: '10px', position: 'absolute', width: '80px' }}>
          <img src="https://api.radar.io/maps/static/images/logo.svg" height="38" width="80" />
        </a>
      </div>
    );
  }
};

export default Map;
