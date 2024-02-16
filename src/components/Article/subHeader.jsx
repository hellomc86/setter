import { CiClock1 } from "react-icons/ci";
import DateTime from "./DateTime";
const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeaderWrapper">
        <div>
          <div className="textWrapper">ТРЕНДЫ</div>
          <div className="textWrapper">РАЗБОР</div>
        </div>
       <DateTime/>
      </div>
    </div>
  );
};

export default SubHeader;
