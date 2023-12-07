import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class DrawGeoJSONMap extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    const map = new Radar.ui.map({
      style: 'radar-light-v1',
      container: 'draw-geojson-map',
      center: [-73.9911, 40.7342], // NYC
      zoom: 15,
    });

    map.on('load', () => {

      // add polygon source and style layer
      const polygon = {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.99117116134302, 40.7350821248109],
              [-73.99183598565162, 40.73375513245966],
              [-73.99117116134302, 40.73398858673653],
              [-73.99053876748896, 40.7337919937155],
              [-73.99117116134302, 40.7350821248109]
            ]
          ],
        }
      };
      map.addSource('polygon', {
        type: 'geojson',
        data: polygon,
      });
      map.addLayer({
        id: 'polygon-layer',
        type: 'fill',
        source: 'polygon',
        layout: {},
        paint: {
          'fill-color': '#000257',
          'fill-opacity': 0.8,
        }
      });

      // add lineString source and style layer
      const lineString = {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.98756879114636, 40.73860557173572],
            [-73.9884240194046, 40.737328338160665],
            [-73.9895643237483, 40.73579750384633],
            [-73.98994855673419, 40.73530913211431],
            [-73.98993616212131, 40.7347550136916],
            [-73.98983700522187, 40.734172714783256],
            [-73.98978742677244, 40.733815819384546],
            [-73.98992376750897, 40.7331865517817],
            [-73.99025842204483, 40.73176832984112],
            [-73.9903947664424, 40.73102633817291],
            [-73.9904691341171, 40.73049096904086],
            [-73.99108886473894, 40.728875443095006],
            [-73.99112604857604, 40.72849034100523],
            [-73.99077899942777, 40.72835884222016]
          ],
        }
      };
      map.addSource('lineString', {
        type: 'geojson',
        data: lineString,
      });
      map.addLayer({
        id: 'line-layer',
        type: 'line',
        source: 'lineString',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#eb0083',
          'line-width': 4
        }
      });

      // add points source and style layer
      const points = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.98985458358028, 40.73434956043141],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [ -73.98680416229618, 40.73307679543319 ],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [ -73.99259610144266, 40.73016543682982 ],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [ -73.9995850413457, 40.734071602337735 ],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.99721034629628, 40.73742165149088],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.99620641017763, 40.738050681209955],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-74.00016423526102, 40.73781662433447],
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.98641803302029, 40.740084015658425],
            }
          },
        ]
      }
      map.addSource('points', {
        type: 'geojson',
        data: points,
      });
      map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': 6,
          'circle-color': '#800080',
          'circle-stroke-color': '#FFFFFF',
          'circle-stroke-width': 2,
        }
      });
    });
  }

  render() {
    return (
      <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
        <div id="draw-geojson-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
      </div>
    );
  }
};

export default DrawGeoJSONMap;
