import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToHome = () => {
    return (
      
        <div className="ToHome"> 
         <Link to="/" style={{ textDecoration: "none", color: "initial" }} > 
           <FaLongArrowAltLeft />   
          <span className="toHomeText">НА ГЛАВНУЮ </span>
          </Link>   
        </div>
      
    );
  };
  
  export default ToHome;
  