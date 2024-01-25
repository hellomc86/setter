import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Line from "./components/line";
import SubHeader from "./components/subHeader";
import ArticleTitle from "./components/AritcleTitle";
import "./App.css";

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
          <ArticleTitle />
        </div>
      </div>
    </>
  );
}

export default App;
