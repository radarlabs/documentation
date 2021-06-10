import React from 'react';
import Head from '@docusaurus/Head';
import {useThemeConfig, useTitleFormatter} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RadarSEO = ({
  title,
  _description,
  keywords,
  image,
}) => {
  const {image: defaultImage} = useThemeConfig();
  const pageImage = useBaseUrl(image || defaultImage, {absolute: true});

  let pageTitle = "Documentation | Radar";
  let socialTitle;

  if (title) {
    if (title == "Documentation") {
      // Overview page is a weird one-off that has "Overview" as its og:title and twitter:title
      socialTitle = "Overview"
    } else {
      socialTitle = title;
      pageTitle = `Documentation - ${title} | Radar`;
    }
  }

  return (
    <Head>
      {/* Swizzled this component in order to customize the title automatically */}
      <title>{pageTitle}</title>
      {title && <meta property="og:title" content={socialTitle} />}
      {title && <meta property="twitter:title" content={socialTitle} />}

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
