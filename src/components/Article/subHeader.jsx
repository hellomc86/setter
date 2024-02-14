import { CiClock1 } from "react-icons/ci";
const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeaderWrapper">
        <div>
          <div className="textWrapper">ТРЕНДЫ</div>
          <div className="textWrapper">РАЗБОР</div>
        </div>
        <div className="DateTime">          
          <div className="articleDate">14 января 2024 года </div>    
          
          <CiClock1 />
          
          <div className="timeText"> 12 мин </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
