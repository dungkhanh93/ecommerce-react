import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, googleSignIn, ...props }) => (
  <button
    className={`${googleSignIn ? 'google-sign-in ' : ''}custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
