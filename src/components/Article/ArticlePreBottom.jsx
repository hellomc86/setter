import ArticleTitle from "./AritcleTitlePre";
import ArticleRead from "../ButtonElements/ArticleRead";
import { Link } from "react-router-dom";
import ArticlePreBottomSub from "./ArticlePreBottomSub";
import ArticlePre from "./ArticlePre";
import DateTime from "./DateTime";

const ArticlePreBottom = () => {
    return (


        <div className="ArticlePreBottom">
            <ArticlePreBottomSub/>
            <ArticlePre />            
            <DateTime/>
        </div>

    );
};

export default ArticlePreBottom;
