import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import List from "./Components/List/list";

const App = () => {
  return(
    <List />
  )
}
ReactDOM.render(<App />,document.getElementById("root"));