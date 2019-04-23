// 主路由 配置
import React from "react";
import { Router } from "@reach/router";
import App from "../App";
import HeaderBar from "../components/headerBar/headerBar";

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

// 导航配置
const HeaderBarConfig = [
  {
    name: "首页",
    type: "home",
    path: "/",
    component: App
  },
  {
    name: "平面设计",
    type: "design",
    path: "/design",
    component: Dashboard
  },
  {
    name: "视频制作",
    type: "video",
    path: "/video",
    component: Dashboard
  },
  {
    name: "素材库",
    type: "material",
    path: "/material",
    component: Dashboard
  }
];

const Rooter = ({ children }) => (
  <div>
    {/* header-bar 导航 */}
    <nav className="header-bar">
      <div className="header-bar-logo" />
      <HeaderBar config={HeaderBarConfig} />
    </nav>

    {/* 路由分支 */}
    <Router>
      {HeaderBarConfig.map(item => (
        <item.component path={item.path} />
      ))}
    </Router>
  </div>
);

export default Rooter;
