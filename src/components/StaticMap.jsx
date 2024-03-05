import React from 'react';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

const StaticMap = ({ query, alt }) => (
    <img src={`https://api.radar.io/maps/static?${query}&publishableKey=${PUBLISHABLE_KEY}`} alt={alt} />
);

export default StaticMap;