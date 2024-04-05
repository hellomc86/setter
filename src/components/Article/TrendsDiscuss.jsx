

import { Link } from "react-router-dom";
import handleClick from "../../utils/utils";
const TrendsAndDiscusses = ({ category, format }) => {
   
    return (
        <div className="TrendsAndDiscusses">
            <Link to="/trends" onClick={handleClick} ><div className="textWrapper">{category}</div></Link>
            <Link to="/discuss" onClick={handleClick}><div className="textWrapper">{format}</div></Link>
        </div>
    );
};

export default TrendsAndDiscusses;
