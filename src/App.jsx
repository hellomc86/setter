
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

import About from "./about/about";
import Advertisement from "./advertisement/advertisement";

import Work from "./nav/work";
import Tech from "./nav/tech";
import Trends from "./nav/trends";
import Culture from "./nav/culture";
import Interview from "./nav/interview";
import Discuss from "./nav/discuss";
import Sense from "./nav/sence";

import SearchInput from "./components/CommonComponents/searchInput";
import { useState, useEffect } from "react";
import apiService from "./api/api.service";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ articles, setArticles ] = useState([]);
  

  const getTodos = async () => {
    const dataArticle = await apiService.getTodo();
    setArticles(dataArticle.data);
    
  }

useEffect(() => {
  getTodos(); 
  console.log("Nav getArticles") 
  
}, []);





  return (
    <div className="App">
      <Header />
      <Nav isExpanded = {isExpanded} setIsExpanded = {setIsExpanded} setIsClicked = {setIsClicked} articles = {articles}
      setArticles = {setArticles}  />
      <Line />
      <SearchInput isExpanded = {isExpanded} setIsExpanded = {setIsExpanded} isClicked = {isClicked} setIsClicked = {setIsClicked} />
      
      <Routes>
        <Route path="/" element={ articles.length && <Home articles = {articles} />} />
        <Route path="/article/:id" element={ <Article articles = {articles}  />}/>
        <Route path="/work" element={<Work articles = {articles} />} />
        <Route path="/tech" element={<Tech articles = {articles}   />} />
        <Route path="/trends" element={<Trends articles = {articles}  />} />
        <Route path="/sence" element={<Sense articles = {articles}   />} />
        <Route path="/interview" element={<Interview articles = {articles}  />} />
        <Route path="/culture" element={<Culture articles = {articles}   />} />
        <Route path="/discuss" element={<Discuss articles = {articles}  />} />
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
