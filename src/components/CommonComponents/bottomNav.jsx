import { Link } from 'react-router-dom'
import handleClick from '../../utils/utils';

const BottomNav = () => {  
  return (
    <nav className="Nav">
      
      <ul>
        <li> <Link to = "/about" onClick={handleClick}>О ПРОЕКТЕ</Link> </li>
        <li> <Link to = "/advertisement" onClick={handleClick}>РЕКЛАМОДАТЕЛЯМ</Link> </li>
        <li> <a href = "https://instagram.com" target="_blank">INSTAGRAM</a> </li>
        <li> <a href = "https://t.me/settersmedia_news" target="_blank">TELEGRAM-КАНАЛ</a> </li>
        <li> <a href = "https://facebook.com" target="_blank">FACEBOOK</a> </li>
        </ul>  
      
    </nav>
  );
};

export default BottomNav;
