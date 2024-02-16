
import "./Article.css";
import ToHome from "../components/ButtonElements/ToHome";


import ArticleTitle from "../components/Article/AritcleTitlePre";
import Line from "../components/CommonComponents/line";
import SubHeader from "../components/Article/subHeader";
import ArticleBody from "../components/Article/ArticleBody";
import ArticlePreBottom from "../components/Article/ArticlePreBottom";


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

      
      
    </div>
  );
}

export default Article;