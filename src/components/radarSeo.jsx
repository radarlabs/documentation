import React from 'react';
import Head from '@docusaurus/Head';
import {useThemeConfig, useTitleFormatter} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RadarSEO = ({
  title,
  description,
  keywords,
  image,
}) => {
  const {image: defaultImage} = useThemeConfig();
  const pageTitle = useTitleFormatter(title);
  const pageImage = useBaseUrl(image || defaultImage, {absolute: true});

  return (
    <Head>
      {/* Swizzled this component in order to customize the title automatically */}
      {title && <title>Documentation - {title} | Radar</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta property="twitter:title" content={title} />}

      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(',') : keywords}
        />
      )}

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content={pageImage} />}
      {pageImage && <meta name="twitter:card" content="summary_large_image" />}
    </Head>
  )
}


export default RadarSEO;
