import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h2>Hello from Child component 👶</h2>;

// This is also known as react composition
const ParentCompnent = () => (
  <div>
    <h1>Hello from the parent component 🤰🏻</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentCompnent />);
