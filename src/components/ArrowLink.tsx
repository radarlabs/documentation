import React from 'react';
import clsx from 'clsx';

import styles from './ArrowLink.module.css';

// import RightArrow from "@site/static/img/right-arrow.svg";

const ArrowLink = ({className, children, href}: {
  className?: string,
  children?: React.ReactNode,
  href: string
}) => {
  return (
    <a
      className={clsx(styles.arrowLink, className)}
      href={href}
    >
      <span>{children}</span>
      {/* <RightArrow /> */}
    </a>
  )
}

export default ArrowLink;
