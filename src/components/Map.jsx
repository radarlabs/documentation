import React from 'react';
import maplibregl from 'maplibre-gl';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api
const CONTAINER = 'map';

class Map extends React.Component {
  componentDidMount() {
    const map = new maplibregl.Map({
      container: CONTAINER,
      style: `https://api.radar.io/maps/styles/radar-default-v1?publishableKey=${PUBLISHABLE_KEY}`,
      center: [-73.9911, 40.7342], // NYC
      zoom: 11
    });

    map.addControl(new maplibregl.NavigationControl());

    new maplibregl.Marker({ color: '#007aff' }).setLngLat([-73.9911, 40.7342]).addTo(map); // Radar HQ
  }

  render() {
    return (
      <div id={CONTAINER} style={{
        height: '20rem',
        margin: '1rem 0',
        width: '95%',
      }} />
    );
  }
};

export default Map;
