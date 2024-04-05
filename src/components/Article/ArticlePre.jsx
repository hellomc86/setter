import ArticleTitle from "./AritcleTitlePre";
import ArticleRead from "../ButtonElements/ArticleRead";


const ArticlePre = ({ anArticle }) => {
    return (
      <div className="ArticlePre">
        <ArticleTitle anArticle = {anArticle}  />
        <ArticleRead/>   
      </div>
    );
  };
  
  export default ArticlePre;
  