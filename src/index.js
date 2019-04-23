// 总入口
// 引入 react、用使用 reactDom 在 web端渲染
import React from "react";
import ReactDOM from "react-dom";
// 引入 css
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// 引入 router 路由定义组件
import IndexRooter from "./router/indexRouter";
// 加载渲染
// 将 根组件 绑定在 HTML 上（绑定在 id 为 root 的dom节点上）
ReactDOM.render(<IndexRooter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.register();
