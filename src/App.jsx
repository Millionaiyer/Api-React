import { useState } from "react";

import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);
  const primary = {
    type: "primary",
    text: "Aply now",
  };
  const secondary = {
    type: "secondary",
    text: "Aply now",
  };
  return (
    <>
      <Card {...primary} />
      <Card {...secondary} />
      <Card />
      <Card />
    </>
  );
}

export default App;
