import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//coponent
import Cricket from "./component/Cricket";
import Tech from "./component/Tech";
import IndiaNews from "./component/IndiaNews";
import TradeDev from "./component/TradeDev";
import Nav from "./component/layout/Nav";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/Cricket" component={Cricket} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/IndiaNews" component={IndiaNews} />
        <Route exact path="/TradeDev" component={TradeDev} />
      </Router>
    </div>
  );
};
export default App;
