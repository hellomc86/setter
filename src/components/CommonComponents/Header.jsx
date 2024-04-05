import { Link } from 'react-router-dom';
import IMAGES from '../../images/images'


const Header = () => {
  
  return (
    <header className="Header">
      <Link to="/" ><img src={IMAGES.image1} alt='first image'/></Link>
    </header>
  );
};

export default Header;
