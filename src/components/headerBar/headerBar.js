import React from "react";
import BarCard from "../barCard/barCard";

import "./headerBar.scss";

const HeaderBar = ({ config }) => {
  return (
    <nav className="header-bar">
      <div className="header-bar-logo" />

      {config.map(item => {
        return <BarCard type={item.type} key={item.path} path={item.path} />;
      })}
    </nav>
  );
};

export default HeaderBar;
