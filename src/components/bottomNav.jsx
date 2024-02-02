import { Link } from 'react-router-dom'

const BottomNav = () => {  
  return (
    <nav className="Nav">
      
      <ul>
        <li> <Link to = "/">О ПРОЕКТЕ</Link> </li>
        <li> <Link to = "/">РЕКЛАМОДАТЕЛЯМ</Link> </li>
        <li> <Link to = "/">INSTAGRAM</Link> </li>
        <li> <Link to = "/">TELEGRAM-КАНАЛ</Link> </li>
        <li> <Link to = "/post">FACEBOOK</Link> </li>
        </ul>  
      
    </nav>
  );
};

export default BottomNav;
