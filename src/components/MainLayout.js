import React from 'react';
import Navs from './Navs';

const Mainlayout = ({ children }) => {
  return (
    <div>
      <Navs />
      {children}
    </div>
  );
};

export default Mainlayout;
