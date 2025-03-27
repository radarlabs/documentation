import React, { useEffect, useRef } from 'react';
import Radar from 'radar-sdk-js';
import maplibregl from "maplibre-gl";

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

const GlobeMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return; 

    Radar.initialize(PUBLISHABLE_KEY);

    mapRef.current = new maplibregl.Map({
      container: 'globe-map',
      style: 'https://api.radar.io/maps/styles/radar-default-v1?&publishableKey=org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947',
      zoom: 1,
      center: [-73.9910078, 40.7342465],
    });

    mapRef.current.on('style.load', () => {
      mapRef.current.setProjection({ type: 'globe' });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
      <div id="globe-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
    </div>
  );
};

export default GlobeMap;