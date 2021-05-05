import React from 'react';

import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';

const InlineTabs = ({ groupId, children }) => {
  const {tabGroupChoices, setTabGroupChoices} = useUserPreferencesContext();

  // if (groupId != null) {
  //   const relevantTabGroupChoice = tabGroupChoices[groupId];
  //   if (relevantTabGroupChoice != null) {
  //     // setSelectedValue(relevantTabGroupChoice);
  //     console.log(relevantTabGroupChoice)
  //   }
  // }

  return <span>
    {children}
  </span>
};

export default InlineTabs;
