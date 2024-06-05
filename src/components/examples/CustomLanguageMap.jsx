import React from 'react';
import Radar from 'radar-sdk-js';

import CodeBlock from '../../theme/CodeBlock';

import 'radar-sdk-js/dist/radar.css';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

export const LANGUAGES = Object.freeze([
  { 'code': 'local', 'language': 'Local' },
  { 'code': 'en', 'language': 'English' },
  { 'code': 'fr', 'language': 'French' },
  { 'code': 'de', 'language': 'German' },
  { 'code': 'es', 'language': 'Spanish' },
  { 'code': 'ja', 'language': 'Japanese' },
  { 'code': 'pt', 'language': 'Portuguese' },
  { 'code': 'it', 'language': 'Italian' },
  { 'code': 'ru', 'language': 'Russian' },
  { 'code': 'nl', 'language': 'Dutch' },
  { 'code': 'zh', 'language': 'Chinese' },
  { 'code': 'pl', 'language': 'Polish' },
  { 'code': 'ca', 'language': 'Catalan' },
  { 'code': 'th', 'language': 'Thai' },
  { 'code': 'uk', 'language': 'Ukrainian' },
  { 'code': 'da', 'language': 'Danish' },
  { 'code': 'sv', 'language': 'Swedish' },
  { 'code': 'id', 'language': 'Indonesian' },
  { 'code': 'ko', 'language': 'Korean' },
  { 'code': 'hu', 'language': 'Hungarian' },
  { 'code': 'cs', 'language': 'Czech' },
  { 'code': 'ro', 'language': 'Romanian' },
  { 'code': 'nb', 'language': 'Norwegian (Bokmål)' },
  { 'code': 'ar', 'language': 'Arabic' },
  { 'code': 'fi', 'language': 'Finnish' },
  { 'code': 'tr', 'language': 'Turkish' },
  { 'code': 'ms', 'language': 'Malay' },
  { 'code': 'el', 'language': 'Greek' },
  { 'code': 'be', 'language': 'Belarusian' },
  { 'code': 'fa', 'language': 'Farsi' },
  { 'code': 'bg', 'language': 'Bulgarian' },
  { 'code': 'sr', 'language': 'Serbian' },
  { 'code': 'hr', 'language': 'Croatian' },
  { 'code': 'gl', 'language': 'Galician' },
  { 'code': 'he', 'language': 'Hebrew' },
  { 'code': 'vi', 'language': 'Vietnamese' },
  { 'code': 'sk', 'language': 'Slovak' },
  { 'code': 'ka', 'language': 'Georgian' },
  { 'code': 'lt', 'language': 'Lithuanian' },
  { 'code': 'sl', 'language': 'Slovene' },
  { 'code': 'ga', 'language': 'Irish' },
  { 'code': 'eu', 'language': 'Basque' },
  { 'code': 'lv', 'language': 'Latvian' },
  { 'code': 'et', 'language': 'Estonian' },
  { 'code': 'bs', 'language': 'Bosnian' },
  { 'code': 'kk', 'language': 'Kazakh' },
  { 'code': 'kn', 'language': 'Kannada' },
  { 'code': 'cy', 'language': 'Welsh' },
  { 'code': 'br', 'language': 'Breton' },
  { 'code': 'ne', 'language': 'Nepali' },
  { 'code': 'si', 'language': 'Sinhalese' },
  { 'code': 'az', 'language': 'Azerbaijani' },
  { 'code': 'mk', 'language': 'Macedonian' },
  { 'code': 'mt', 'language': 'Maltese' },
  { 'code': 'sq', 'language': 'Albanian' },
  { 'code': 'is', 'language': 'Icelandic' },
  { 'code': 'mr', 'language': 'Marathi' },
  { 'code': 'mn', 'language': 'Mongolian' },
  { 'code': 'am', 'language': 'Amharic' },
  { 'code': 'bn', 'language': 'Bengali' },
  { 'code': 'hy', 'language': 'Armenian' },
  { 'code': 'hi', 'language': 'Hindi' },
  { 'code': 'ky', 'language': 'Kyrgyz' },
  { 'code': 'lo', 'language': 'Lao' },
]);

const htmlSnippet = (language) =>
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link href="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.css" rel="stylesheet">
    <script src="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.min.js"></script>
  </head>

  <body>
    <div id="map" style="width: 100%; height: 400px;" />

    <script type="text/javascript">
      Radar.initialize('prj_live_pk_...');

      // create map
      const map = new Radar.ui.map({
        container: 'map',
        language: '${language}',
      });

    </script>
  </body>
</html>
`;

class CustomLanguageMap extends React.Component {
  state = {
    language: 'local',
  };

  componentDidMount() {
    const { language } = this.state;

    Radar.initialize(PUBLISHABLE_KEY);

    const map = Radar.ui.map({
      container: 'custom-language-map',
      language,
    });
    this.setState({ map });
  }

  handleLanguageChange = (e) => {
    const { map } = this.state;

    // get state from current map and remove
    const { lat, lng } = map.getCenter();
    const zoom = map.getZoom();
    map.remove();

    // add new map with language at previous state
    const language = e.target.value;
    const newMap = Radar.ui.map({
      container: 'custom-language-map',
      center: [lng, lat],
      zoom,
      language,
    });
    this.setState({ map: newMap, language });
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <div style={{ height: '400px', margin: '1rem 0 1.5rem', position: 'relative', width: '100%' }}>
          <div id="custom-language-map" style={{ bottom: 0, position: 'absolute', top: 0, width: '100%' }} />
          <select style={{ position: 'absolute', top: 8, right: 8 }} onChange={this.handleLanguageChange}>
            { LANGUAGES.map(({ code, language }) => (
              <option key={code} value={code}>{language}</option>
            ))}
          </select>
        </div>

        <CodeBlock className="html">
          { htmlSnippet(language) }
        </CodeBlock>

      </div>
    );
  }
};

export default CustomLanguageMap;
