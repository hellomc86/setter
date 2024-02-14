import imagesArray from "./../../public/imagesg/images2";
import IMAGES from './../images/images'
import PaginatedItems from "../components/Gallery/Pagination";
import "./Article.css";
import ToHome from "../components/ButtonElements/ToHome";
import Image from "../components/CommonComponents/Image";
import { Link } from "react-router-dom";
import ArticleTitle from "../components/Article/AritcleTitlePre";
import Line from "../components/CommonComponents/line";
import SubHeader from "../components/Article/subHeader";


function Article() {

  return (
    <div className="articleWrapper" >
       <ToHome />
       <ArticleTitle />
      <Line />
      <SubHeader/>
      <Image image={IMAGES.image2} />

      
      
      <Image image={IMAGES.image3} />
    </div>
  );
}

export default Article;