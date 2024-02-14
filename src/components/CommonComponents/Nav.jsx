import { Link } from 'react-router-dom'

const Nav = () => {  
  return (
    <nav className="Nav">
      
      <ul>
        <li> <Link to = "/work">ДЕЛО</Link> </li>
        <li> <Link to = "/">ТЕХНО</Link> </li>
        <li> <Link to = "/">ТРЕНДЫ</Link> </li>
        <li> <Link to = "/">СМЫСЛЫ</Link> </li>
        <li> <Link to = "/post">ИНТЕРВЬЮ</Link> </li>
        <li> <Link to = "/about">КУЛЬТУРА</Link> </li>
      </ul>
      
      <div className='navSearchIcon'>
      <img src="/assets/icons/search.svg"/>
      </div>
      
    </nav>
  );
};

export default Nav;
