import React from 'react';

import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';


const InlineTabItem = ({ test, groupId, value, children }) => {
  const {tabGroupChoices, setTabGroupChoices} = useUserPreferencesContext();

  const relevantTabGroupChoice = tabGroupChoices[groupId];

  if (groupId != null && relevantTabGroupChoice == value) {
    return <span>
      {children}
    </span>
  }

  return '';
};

export default InlineTabItem;
