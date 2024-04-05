import IMAGES from './../images/images'

import "./advertisement.css"
import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";


function Advertisement() {

    return (
        <div className="contentWrapper">
            <ToHome />
            <h2> РЕКЛАМАДАТЕЛЯМ </h2>
            <p className="advBodyText">Нас вдохновляют люди и бренды, которые продолжают развивать индустрию и пересобирать мир вокруг. Мы с радостью обсудим возможные интеграции и форматы сотрудничества.</p>
            <div className='advcontact'>
                <h3> ВЫ МОЖЕТЕ:</h3>
                <p> — посмотреть наш медиакит</p>
                <p> — изучить прайс-лист</p>
                <p> — написать нам напрямую: sales@setters.media </p>
            </div>
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Advertisement;