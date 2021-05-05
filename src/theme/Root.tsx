import React from 'react';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Root = ({children}) => {
  return <>
    <ScrollToTopButton />
    {children}
  </>;
}

export default Root;
