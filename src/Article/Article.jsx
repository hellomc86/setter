
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
import { useParams } from "react-router-dom";

function Article({ articles  }) {


  const { id } = useParams();

  const articleGet = (() => {
    return articles.find(post => (post._id).toString() === id);
  });

  const randArticle = Math.floor(Math.random()*articles.length)

  const anArticle = articleGet();

  const articlePre = articles[randArticle];


  return (
    <>{anArticle && <div className="articleWrapper" >
      <ToHome />
      {anArticle && <ArticleTitle anArticle={anArticle} />}

      <Line />
      <SubHeader category={anArticle.category} format={anArticle.format} />

      <ArticleBody anArticle={anArticle} />

      <Line />
      <ArticlePreBottom articlePre = { articlePre } />
      <SwipeArticles articles={articles} />
      <ToTop />

    </div>}

    </>

  );
}

export default Article;