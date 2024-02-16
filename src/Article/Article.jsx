
import "./Article.css";
import ToHome from "../components/ButtonElements/ToHome";


import ArticleTitle from "../components/Article/AritcleTitlePre";
import Line from "../components/CommonComponents/line";
import SubHeader from "../components/Article/subHeader";
import ArticleBody from "../components/Article/ArticleBody";
import ArticlePreBottom from "../components/Article/ArticlePreBottom";
import SwipeArticles from "./swiper";
import imagesArray from "./../../public/imagesg/images2";
import ToTop from "../components/ButtonElements/ToTop";

function Article() {

  return (
    <div className="articleWrapper" >
       <ToHome />
       <ArticleTitle />
      <Line />
      <SubHeader/>
        
      <ArticleBody />
      <ArticleBody />
      <ArticleBody />
      <Line/>
      <ArticlePreBottom/>  
      <SwipeArticles images={imagesArray}  />  
      <ToTop/>
      
    </div>
  );
}

export default Article;