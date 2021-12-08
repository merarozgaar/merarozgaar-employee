// @flow
import React from 'react';

type IconType = ({ icon: string }) => React$Node;

const Icon: IconType = ({ icon }) => (
  <span className="material-icons" style={{ verticalAlign: 'text-top' }}>
    {icon}
  </span>
);

export default Icon;
