import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import IndiaNews from "./component/IndiaNews";   component 1
// import Cricket from "./component/Cricket";       component 2
// import Tech from "./component/Tech";             component 3
// import TradeDev from "./component/TradeDev";     component 4

// import Nav from "./component/layout/Nav";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
