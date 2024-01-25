import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Line from "./components/line";
import SubHeader from "./components/subHeader";

import "./App.css";
import ArticlePre from "./components/ArticlePre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <Nav />
        <Line />
        <div className="contentWrapper">
          <SubHeader />
          <ArticlePre />
        </div>
      </div>
    </>
  );
}

export default App;
