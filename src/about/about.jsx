import IMAGES from './../images/images'

import "./about.css"
import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";


function About () {
    
    return (
        <div className="contentWrapper">
                <ToHome />
          <p className='title'> ( THEREGISTAN — ИЗДАНИЕ ДЛЯ ТЕХ, КТО СОГЛАСЕН, НА БУДУЩЕЕ ) </p>
                  
          
          <Image image = {IMAGES.image3}/>

          <p className="ArticleBodyText">
        Рабочее утро начинается не с кофе. В десять утра я сажусь за свой стол в офисе и достаю из футляра нейроинтерфейс Neiry Headband, или, как его еще называют, Mind Tracker. Почти каждый, кому я попадаюсь в поле зрения, спрашивает: «Джей, а что это у тебя на голове?» Наверное, если бы я носил Neiry Headphones, никто бы ничего не заметил, потому что этот нейроинтерфейс адаптирован под наушники. Но, выбирая повязку на голову, я решил, что хочу побыть человеком из будущего.
Ответ на вопрос был таков: «Это нейроинтерфейс. Я его тестирую. Он отслеживает в реальном времени мое психическое состояние по волнам, которые испускает мой мозг, и показывает, насколько я сейчас сфокусирован, спокоен и напряжен».
При первом соприкосновении  у коллег, как и у меня, нейроинтерфейс вызывает восторг, какой обычно испытывают дети при виде новой игрушки. Думаю, что со стороны это действительно выглядит как забава и только новаторы и ранние последователи могут воспринять технологию всерьез. Я примкнул ко второй группе и провел в устройстве больше 20 часов. Ниже — все, что понял и не понял.
        </p>

        </div>
    );
}

export default About;