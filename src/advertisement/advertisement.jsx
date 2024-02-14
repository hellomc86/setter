import IMAGES from './../images/images'


import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";


function Advertisement () {
    
    return (
        <div className="contentWrapper">
                <ToHome />
          <h2> РЕКЛАМАДАТЕЛЯМ </h2>
          <p>Нас вдохновляют люди и бренды, которые продолжают развивать индустрию и пересобирать мир вокруг. Мы с радостью обсудим возможные интеграции и форматы сотрудничества.</p>
                  
          
          <Image image = {IMAGES.image3}/>
        </div>
    );
}

export default Advertisement;