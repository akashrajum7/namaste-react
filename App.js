import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1>Hello from Child component 👋</h1>;

// This is also known as react composition
const ParentCompnent = () => (
  <div>
    <Title />
    <h2>Hello from the parent component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentCompnent />);
