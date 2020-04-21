import React from 'react';
import Fade from 'react-reveal/Fade';
import NavigationWrapper from '../components/common/NavigationWrapper';

export default function Blog({ children }) {
  return (
    <div>
      <NavigationWrapper>
        <Fade duration={1500}>{children}</Fade>
      </NavigationWrapper>
    </div>
  );
}
