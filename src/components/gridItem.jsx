import { CiClock1 } from "react-icons/ci";

const GridItem = ( {image} ) => {
    
    return (
        
      <div className="grid-item">
        <img src = {image}/>
        <div>
          <div className="textWrapper">ТРЕНДЫ</div>
          <div className="textWrapper">РАЗБОР</div>
        </div>
        <br/>
        <div className="grid-item-text">
          Инноватор и контрол-фрик. За что критикуют Джеффа Безоса и чем он все-таки хорош        
        </div>
        <br />
        <div className="DateTime">          
        <div className="articleDate">14 января 2024 года </div>   
          
          <CiClock1 />
          
          
          <div className="timeText"> 12 мин </div>
          
        </div>
      </div>
    );
  };
  
  export default GridItem;
  