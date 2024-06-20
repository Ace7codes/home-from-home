import './Header.css';
import Logo from './logo.png';
import Hamburger from './hamburger-menu-svgrepo-com.svg';
import Cancel from './cancel-button-svgrepo-com.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const toggleMenu = () => {
        setShowDropDown(!showDropDown)
    }

    return (
        <>
            <header>
                <img src={Logo} alt="Website Logo" width='150' height='100'/>
                <h2>HomefromHome Africa </h2>
                <nav className='default'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <nav className="drop-down">
                    {!showDropDown&& <button onClick={toggleMenu}><img src={Hamburger} alt="Show hamburger menu button" height="50px" width="50px"/></button>}
                    {showDropDown&& <button onClick={toggleMenu}><img src={Cancel} alt="Hide hamburger menu button" height="50px" width="50px"/></button>}
                </nav>
            </header>
            {showDropDown&&
                <ul className="hamburger-links">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/destinations" onClick={toggleMenu}>Destinations</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            }
        </>
    );
}
 
export default Header;