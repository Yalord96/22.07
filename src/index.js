import React from "react";
import ReactDOM from "react-dom";

function tick() {
  const element = (
    <div>
      <h1>Hello world!</h1>
      <h2>it is {new Date().toLocaleTimeString()}.</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(tick, 1000);
