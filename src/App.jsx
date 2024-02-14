
import Header from "./components/CommonComponents/Header";
import Nav from "./components/CommonComponents/Nav";
import Line from "./components/CommonComponents/line";
import "./components/ButtonElements/ButtonElements.css";
import "./components/CommonComponents/CommonComponents.css"
import "./App.css";
import BottomNav from "./components/CommonComponents/bottomNav";
import CopyRight from "./components/CommonComponents/CopyRight";
import Home from "./home/home";
//import Gallery from "./components/Gallery";

import { Routes, Route } from "react-router-dom";
import Article from "./Article/Article";
import Work from "./work/work";
import About from "./about/about";
import Advertisement from "./advertisement/advertisement";


function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Line />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertisement" element={<Advertisement />} />
      </Routes>
      <Line />
      <BottomNav />
      <CopyRight />

    </div>

  );
}

export default App;
