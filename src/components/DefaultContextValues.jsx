import React, { useEffect } from 'react';

import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';

/**
 * Hacky way of setting default values for Docusaurus Contexts
 * Note: This is very likely to break if the underlying context mechanisms change,
 * but it was better than swizzling the chain of Contexts + Hooks used in this sequence
 */
const DefaultContextValues = () => {
  const {tabGroupChoices, setTabGroupChoices} = useUserPreferencesContext();

  useEffect(() => {
    if (!tabGroupChoices['ios']) { setTabGroupChoices('ios', 'swift') }
    if (!tabGroupChoices['android']) { setTabGroupChoices('android', 'kotlin') }
  }, [])

  return '';
}

export default DefaultContextValues;
