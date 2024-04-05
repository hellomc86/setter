import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import apiService from "../../api/api.service";

const Nav = ({ isExpanded, setIsExpanded, setIsClicked, articles,  setArticles }) => {
  const toggleSearchInput = () => {
    setIsExpanded(!isExpanded);
    setIsClicked(true);
  };


return (
  <nav className="Nav">

    <ul>
      <li> <Link to="/work">ДЕЛО</Link> </li>
      <li> <Link to="/tech">ТЕХНО</Link> </li>
      <li> <Link to="/trends">ТРЕНДЫ</Link> </li>
      <li> <Link to="/sence">СМЫСЛЫ</Link> </li>
      <li> <Link to="/interview">ИНТЕРВЬЮ</Link> </li>
      <li> <Link to="/culture">КУЛЬТУРА</Link> </li>
    </ul>

    <div className='navSearchIcon' onClick={toggleSearchInput}>
      <img src="/assets/icons/search.svg" />
    </div>

  </nav>
);
};

export default Nav;
