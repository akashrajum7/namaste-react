/*
<div id="parent">
  <div id="child">
    <h1>Hello World</h1>
    <h2>React is awesome</h2>
  </div>
  <div id="sibling">
    <h1>Hello World</h1>
    <h2>React is awesome</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", {}, "Hello World"),
      React.createElement("h2", {}, "React is awesome"),
    ]
  ),
  React.createElement(
    "div",
    {
      id: "sibling",
    },
    [
      React.createElement("h1", {}, "Hello World"),
      React.createElement("h2", {}, "React is awesome"),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
