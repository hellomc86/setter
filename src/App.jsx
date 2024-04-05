
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

import ArticlesByCategory from "./ArticlesByCategory/ArticlesByCategory";




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
    <>
    {articles &&
    <div className="App">
      <Header />
      <Nav isExpanded = {isExpanded} setIsExpanded = {setIsExpanded} setIsClicked = {setIsClicked} articles = {articles}
      setArticles = {setArticles}  />
      <Line />
      <SearchInput isExpanded = {isExpanded} setIsExpanded = {setIsExpanded} isClicked = {isClicked} setIsClicked = {setIsClicked} />
      <Routes>
        <Route path="/" element={ articles.length && <Home articles = {articles} />} />
        <Route path="/article/:id" element={ <Article articles = {articles}  />}/>
        <Route path="/work" element={<ArticlesByCategory articles = {articles} filterBy={"ДЕЛО"} />} />
        <Route path="/tech" element={<ArticlesByCategory articles = {articles} filterBy={"ТЕХНО"}  />} />
        <Route path="/trends" element={<ArticlesByCategory articles = {articles} filterBy={"ТРЕНДЫ"} />} />
        <Route path="/sence" element={<ArticlesByCategory articles = {articles} filterBy={"СМЫСЛЫ"}  />} />
        <Route path="/interview" element={<ArticlesByCategory articles = {articles} filterBy={"ИНТЕРВЬЮ"}  />} />
        <Route path="/culture" element={<ArticlesByCategory articles = {articles} filterBy={"КУЛЬТУРА"}  />} />
        <Route path="/discuss" element={<ArticlesByCategory articles = {articles} filterBy={"РАЗБОР"}  />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertisement" element={<Advertisement />} />
        
      </Routes>
      <Line />
      <BottomNav />
      <CopyRight />

    </div>
} {!articles && <p>Loding</p>}
    </>

  );
}

export default App;
