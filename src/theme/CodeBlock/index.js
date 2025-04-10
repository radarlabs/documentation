/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState, useRef} from 'react';
import clsx from 'clsx';
import Highlight, {defaultProps} from 'prism-react-renderer';
import copy from 'copy-text-to-clipboard';
import rangeParser from 'parse-numeric-range';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {useThemeConfig, parseCodeBlockTitle} from '@docusaurus/theme-common';
import {usePluginData} from '@docusaurus/useGlobalData';
import { apiKeyFetcher } from './LoggedInApiKey';

const HighlightLinesRangeRegex = /{([\d,-]+)}/;
const HighlightLanguages = ['js', 'jsBlock', 'jsx', 'python', 'html'];
// Supported types of highlight comments
const HighlightComments = {
  js: {
    start: '\\/\\/',
    end: '',
  },
  jsBlock: {
    start: '\\/\\*',
    end: '\\*\\/',
  },
  jsx: {
    start: '\\{\\s*\\/\\*',
    end: '\\*\\/\\s*\\}',
  },
  python: {
    start: '#',
    end: '',
  },
  html: {
    start: '<!--',
    end: '-->',
  },
}; // Supported highlight directives

const HighlightDirectives = [
  'highlight-next-line',
  'highlight-start',
  'highlight-end',
];

const getHighlightDirectiveRegex = (languages = HighlightLanguages) => {
  // to be more reliable, the opening and closing comment must match
  const commentPattern = languages
    .map((lang) => {
      const {start, end} = HighlightComments[lang];
      return `(?:${start}\\s*(${HighlightDirectives.join('|')})\\s*${end})`;
    })
    .join('|'); // white space is allowed, but otherwise it should be on it's own line

  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}; // select comment styles based on language

const highlightDirectiveRegex = (lang) => {
  switch (lang) {
    case 'js':
    case 'javascript':
    case 'ts':
    case 'typescript':
      return getHighlightDirectiveRegex(['js', 'jsBlock']);

    case 'jsx':
    case 'tsx':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'jsx']);

    case 'html':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'html']);

    case 'python':
    case 'py':
      return getHighlightDirectiveRegex(['python']);

    default:
      // all comment types
      return getHighlightDirectiveRegex();
  }
};

export default function CodeBlock({
  children,
  className: languageClassName,
  metastring,
  title,
}) {
  const {radarGitHubReleases} = usePluginData('radar-version-injector');
  const {prism} = useThemeConfig();
  const [showCopied, setShowCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [testApiKeys, setTestApiKeys] = useState(null);

  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.

  useEffect(() => {
    setMounted(true);

    apiKeyFetcher.getTestKeys().then((keys) => {
      // this will only happen if keys are found for a logged in user
      setTestApiKeys(keys);
    }).catch((e) => {
      // ignoring not finding keys
    })

  }, []); // TODO: the title is provided by MDX as props automatically
  // so we probably don't need to parse the metastring
  // (note: title="xyz" => title prop still has the quotes)

  const codeBlockTitle = parseCodeBlockTitle(metastring) || title;
  const button = useRef(null);
  let highlightLines = [];
  const prismTheme = usePrismTheme(); // In case interleaved Markdown (e.g. when using CodeBlock as standalone component).

  let content = Array.isArray(children) ? children.join('') : children;

  if (metastring && HighlightLinesRangeRegex.test(metastring)) {
    // Tested above
    const highlightLinesRange = metastring.match(HighlightLinesRangeRegex)[1];
    highlightLines = rangeParser(highlightLinesRange).filter((n) => n > 0);
  }

  let language = languageClassName?.replace(/language-/, '');

  if (!language && prism.defaultLanguage) {
    language = prism.defaultLanguage;
  } // only declaration OR directive highlight can be used for a block

  // radarGitHubReleases will have keys such as "RADAR_WEB_SDK_VERSION",
  // "RADAR_IOS_SDK_VERSION", etc.
  // replace all $RADAR_WEB_SDK_VERSION$ (i.e. the key name surrounded by $ $)
  // in codeblocks with the value / actual version.
  radarGitHubReleases && Object.keys(radarGitHubReleases).forEach((key) => {
    content = content.replace(new RegExp(`\\$${key}\\$`, 'g'), radarGitHubReleases[key]);
  });

  if(testApiKeys) {
    // only replace PUBLIC test and live key examples
    // leave _sk_... secret key examples as is.
    content = content.replace('prj_live_pk_...', testApiKeys.testPublicKey);
    content = content.replace('prj_test_pk_...', testApiKeys.testPublicKey);
  }

  let code = content.replace(/\n$/, '');

  if (highlightLines.length === 0 && language !== undefined) {
    let range = '';
    const directiveRegex = highlightDirectiveRegex(language); // go through line by line

    const lines = content.replace(/\n$/, '').split('\n');
    let blockStart; // loop through lines

    for (let index = 0; index < lines.length; ) {
      const line = lines[index]; // adjust for 0-index

      const lineNumber = index + 1;
      const match = line.match(directiveRegex);

      if (match !== null) {
        const directive = match
          .slice(1)
          .reduce((final, item) => final || item, undefined);

        switch (directive) {
          case 'highlight-next-line':
            range += `${lineNumber},`;
            break;

          case 'highlight-start':
            blockStart = lineNumber;
            break;

          case 'highlight-end':
            range += `${blockStart}-${lineNumber - 1},`;
            break;

          default:
            break;
        }

        lines.splice(index, 1);
      } else {
        // lines without directives are unchanged
        index += 1;
      }
    }

    highlightLines = rangeParser(range);
    code = lines.join('\n');
  }

  const handleCopyCode = () => {
    copy(code);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <Highlight
      {...defaultProps}
      key={String(mounted)}
      theme={prismTheme}
      code={code}
      language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className={styles.codeBlockContainer}>
          {codeBlockTitle && (
            <div style={style} className={styles.codeBlockTitle}>
              {codeBlockTitle}
            </div>
          )}
          <div className={clsx(styles.codeBlockContent, language)}>
            <pre
              /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
              tabIndex={0}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={style}>
              <code className={styles.codeBlockLines}>
                {tokens.map((line, i) => {
                  if (line.length === 1 && line[0].content === '') {
                    line[0].content = '\n'; // eslint-disable-line no-param-reassign
                  }

                  const lineProps = getLineProps({
                    line,
                    key: i,
                  });

                  if (highlightLines.includes(i + 1)) {
                    lineProps.className += ' docusaurus-highlight-code-line';
                  }

                  return (
                    <span key={i} {...lineProps}>
                      {line.map((token, key) => (
                        <span
                          key={key}
                          {...getTokenProps({
                            token,
                            key,
                          })}
                        />
                      ))}
                    </span>
                  );
                })}
              </code>
            </pre>

            <button
              ref={button}
              type="button"
              aria-label={translate({
                id: 'theme.CodeBlock.copyButtonAriaLabel',
                message: 'Copy code to clipboard',
                description: 'The ARIA label for copy code blocks button',
              })}
              className={clsx(styles.copyButton, 'clean-btn')}
              onClick={handleCopyCode}>
              {showCopied ? (
                <Translate
                  id="theme.CodeBlock.copied"
                  description="The copied button label on code blocks">
                  Copied
                </Translate>
              ) : (
                <Translate
                  id="theme.CodeBlock.copy"
                  description="The copy button label on code blocks">
                  Copy
                </Translate>
              )}
            </button>
          </div>
        </div>
      )}
    </Highlight>
  );
}
