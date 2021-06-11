import React from 'react';
import Head from '@docusaurus/Head';
import {useThemeConfig, useTitleFormatter} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ROOT_BREADCRUMB = {
  name: 'Radar',
  path: '/',
};

// String Utils
export const capitalizeFirst = (string = '') => (
  (string[0] || '').toUpperCase() + string.slice(1)
);

export const titleize = (string) => (
  (string || '').split(/[\s+]/).map(capitalizeFirst).join(' ')
);

// Breadcrumbs Metadata
const breadcrumbMetadata = (pageList) => {
  const itemListElement = pageList.map((page, index) => {
    const name = titleize(page.name || '');

    return {
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: {
        '@id': `https://radar.io${page.path}`,
        name,
      },
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
};

export const getDocumentationBreadcrumbs = (slug, title) => {
  const breadcrumbs = [
    ROOT_BREADCRUMB,
    { name: 'Documentation', path: '/documentation' },
  ];

  if (slug && title) {
    if (slug === 'places/categories' || slug === 'places/chains') {
      breadcrumbs.push(
        { name: 'Places', path: '/documentation/places' },
      );
    }
    breadcrumbs.push(
      { name: title, path: `/documentation/${slug}` },
    );
  }

  return breadcrumbMetadata(breadcrumbs);
};

export const structuredData = (data) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const RadarSEO = ({
  title,
  _description,
  keywords,
  image,
  slug
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
      {structuredData(getDocumentationBreadcrumbs(slug, title))}
    </Head>
  )
}


export default RadarSEO;
