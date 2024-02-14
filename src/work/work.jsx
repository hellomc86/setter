
import SubHeader from "../components/Article/subHeader";

import "./../App.css";


import imagesArray from "./../../public/imagesg/images2";
import IMAGES from './../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";


function Work () {
    
    return (
        <div className="contentWrapper">
                <ToHome />
          <h2>ДЕЛО</h2>
                  
          <PaginatedItems itemsPerPage= {12} items={imagesArray}/>
          <Image image = {IMAGES.image3}/>
        </div>
    );
}

export default Work;