import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

function App() {
  const [theme, setTheme] = React.useState("red");

  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };

  return <div></div>;
}

function Text({ theme }) {
  return <h1 style={{ color: `${theme}` }}>{theme}</h1>;
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
