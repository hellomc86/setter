import IMAGES from './../images/images'


import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";


function About () {
    
    return (
        <div className="contentWrapper">
                <ToHome />
          <h2> THEREGISTAN — ИЗДАНИЕ ДЛЯ тех, КТО согласен, НА БУДУЩЕЕ </h2>
                  
          
          <Image image = {IMAGES.image3}/>
        </div>
    );
}

export default About;