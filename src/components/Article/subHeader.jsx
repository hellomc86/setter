
import DateTime from "./DateTime";

import TrendsAndDiscusses from "./TrendsDiscuss";
const SubHeader = ({ category, format }) => {
  return (
    <div className="subHeader">
      <div className="subHeaderWrapper">
       <TrendsAndDiscusses category = {category} format = {format} />
       <DateTime/>
      </div>
    </div>
  );
};

export default SubHeader;
