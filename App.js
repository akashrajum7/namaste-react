const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);