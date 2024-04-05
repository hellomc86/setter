
import { Link } from "react-router-dom";

import ArticlePre from "./ArticlePre";
import DateTime from "./DateTime";
import handleClick from "../../utils/utils";
import TrendsAndDiscusses from "./TrendsDiscuss";

const ArticlePreBottom = ({ articlePre }) => {
    return (


        <div className="ArticlePreBottom">
           <TrendsAndDiscusses category={articlePre.category} format={articlePre.format} />
            <Link to = {`/article/${articlePre._id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}><ArticlePre anArticle={articlePre} /></Link>            
            <DateTime/>
        </div>

    );
};

export default ArticlePreBottom;
