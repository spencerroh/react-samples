import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from '../SideMenu';

const MainLayout = ({children}) => {
  return (
    <div className="flex h-full flex-row">
      <div className="mr-4 w-64 shadow-xl">
        <SideMenu />
      </div>
      <div className="grow-[1] overflow-auto">{ children }</div>
    </div>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;