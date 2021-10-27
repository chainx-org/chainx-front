import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./css/index.css";
import "./i18n";
import './css/output.css'
console.log(process.env.REACT_APP_ENV)

console.log = (function (oriLogFunc) {
  return function () {
    //判断配置文件是否开启日志调试
    if (process.env.REACT_APP_ENV==='development') {
      try{
        oriLogFunc.call(console, ...arguments);
      }catch(e){
        console.error('console.log error', e);
      }
    }
  }
})(console.log);

ReactDOM.render(<App />, document.getElementById("root"));
