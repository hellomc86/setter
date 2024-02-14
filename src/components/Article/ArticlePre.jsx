import ArticleTitle from "./AritcleTitlePre";
import ArticleRead from "../ButtonElements/ArticleRead";
import { Link } from "react-router-dom";

const ArticlePre = () => {
    return (
      <div className="ArticlePre">
        <ArticleTitle />
        <Link to = "/article" style={{ textDecoration: 'none' }}> <ArticleRead/>        </Link>
      </div>
    );
  };
  
  export default ArticlePre;
  