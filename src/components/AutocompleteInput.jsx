import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

class AutocompleteInput extends React.Component {
  componentDidMount() {
    Radar.initialize(PUBLISHABLE_KEY);

    new Radar.ui.autocomplete({
      container: 'autocomplete',
      width: '600px',
    });
  }

  render() {
    return (
      <div id="autocomplete"></div>
    );
  }
};

export default AutocompleteInput;