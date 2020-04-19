import React from 'react';
import NavigationWrapper from '../components/common/NavigationWrapper';

export default function Blog({ children }) {
  return (
    <div>
      <NavigationWrapper>{children}</NavigationWrapper>
    </div>
  );
}
