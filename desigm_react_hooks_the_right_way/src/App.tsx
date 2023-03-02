import { useState } from "react";

import Nav from "./components/Nav.component";

import "./App.css";

const menus = [
  { key: "home", label: "Home" },
  { key: "product", label: "Product" },
  { key: "about", label: "About" },
  { key: "secure", label: "Secure", disabled: true },
];

function App() {
  const [count, setCount] = useState(0);

  return <Nav items={menus} selected="home" />;
}

export default App;
