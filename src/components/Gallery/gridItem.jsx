import { CiClock1 } from "react-icons/ci";
import TrendsAndDiscusses from "../Article/TrendsDiscuss";
import { Link } from "react-router-dom";
import handleClick from "../../utils/utils";

const GridItem = ( {item } ) => {
    
    return (
        
      <div className="grid-item">
        <Link to = {`/article/${item._id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}><img src = {item.image}/></Link>
        <TrendsAndDiscusses category={item.category} format = {item.format} />
        
        <Link to = {`/article/${item._id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="grid-item-text">
          
          { item.titleOne + " " + item.titleTwo }  
          
        </div>
        </Link>
        
        <div className="DateTime">          
        <div className="articleDate">14 января 2024 года </div>   
          
          <CiClock1 />
          
          
          <div className="timeText"> 12 мин </div>
          
        </div>
      </div>
    );
  };
  
  export default GridItem;
  