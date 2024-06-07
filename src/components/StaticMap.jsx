import React from 'react';
import CodeBlock from '../theme/CodeBlock';

const PUBLISHABLE_KEY = 'org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947'; // same key as /demo/api

const StaticMap = ({ query, alt, imgTag, hideSnippet }) => {
  const url = `https://api.radar.io/maps/static?${query}`;
  const img = `<img src="${url}" alt="${alt}" />`;
  const language = imgTag ? 'html' : 'text';

  const showSnippet = !Boolean(hideSnippet);

  return (
    <div>
      { showSnippet &&
        <CodeBlock className={language}>
          { imgTag ? img : url }
        </CodeBlock>
      }
      <img src={`${url}&publishableKey=${PUBLISHABLE_KEY}`} alt={alt} />
    </div>
  )
};

export default StaticMap;
