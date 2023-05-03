import React from 'react';
import maplibre from 'maplibre-gl';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api
const CONTAINER = 'map';
// const CENTER_USA = [-98.6051, 39.7298];
const CENTER_NYC = [-73.9911, 40.7342];

class Map extends React.Component {
  componentDidMount() {
    const map = new maplibre.Map({
      container: CONTAINER,
      style: `https://api.radar.io/maps/styles/radar-streets-beta?publishableKey=${PUBLISHABLE_KEY}`,
      center: CENTER_NYC,
      zoom: 11
    });

    map.addControl(new maplibre.NavigationControl());
  }

  render() {
    return (
      <div id={CONTAINER} style={{
        height: '25rem',
        margin: '1rem auto',
        width: '100%',
      }} />
    );
  }
  
};

export default Map;
