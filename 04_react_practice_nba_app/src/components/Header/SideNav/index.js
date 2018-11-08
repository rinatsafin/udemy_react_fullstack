import React from "react";
import SideNav from "react-simple-sidenav";

import SideNavItems from "./SideNavItems";

const SideNavigation = props => {
  const { showNav, onHideNav } = props;
  return (
    <div>
      <SideNav
        showNav={showNav}
        onHideNav={onHideNav}
        navStyle={{
          backgroundColor: "#242424",
          maxWidth: "200px",
          color: "#fff",
        }}
      >
        <SideNavItems></SideNavItems>
      </SideNav>
    </div>
  );
};

export default SideNavigation;
