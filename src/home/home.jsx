
import SubHeader from "../components/Article/subHeader";

import "./../App.css";
import ArticlePre from "../components/Article/ArticlePre";

import imagesArray from "./../../public/imagesg/images2";
import IMAGES from './../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";


function Home () {
    
    return (
        <div className="contentWrapper">
          <SubHeader />
          <ArticlePre />
          <Image image = {IMAGES.image2}/>          
          <PaginatedItems itemsPerPage= {12} items={imagesArray}/>
          <Image image = {IMAGES.image3}/>
        </div>
    );
}

export default Home;