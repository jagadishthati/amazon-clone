import React from 'react'
import "./Header.css"
import  "./Login";
import "./Checkout"
import { Home } from './Home';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <>
    <nav className='header'>
        <Link to ="/">
      <img className="header__logo"src='https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png' alt='amazonLogo'/>
        </Link>
   <div className='header_search'>
    <input type={"text"} className="header__searchInput" />
       {/* <svg data-testid="SearchIcon"></svg> */}
       <SearchIcon className='header__searchIcon'/>
   </div>
   <div className='header__nav'>
        <Link to={"/Login"}  className='header__link'>
    <div className='header__option'>
        <span className='lineOne' >
      hello aj
        </span>
        <span className='lineTwo'>
            Sign In
        </span>
    </div>
        </Link>

        <Link to={"/Checkout"}  className='header__link'>
    <div className='header__option'>
        <span className='lineOne' >
      Return
        </span>
        <span className='lineTwo'>
            &Orders
        </span>
    </div>
        </Link>
        <Link to={"/"}  className='header__link'>
    <div className='header__option'>
        <span  className='lineOne'>
      Your
        </span>
        <span className='lineTwo'>
            Prime
        </span>
    </div>
        </Link>
        <Link to={"/"} className='header__link'>
            <div className='Basket'>
                 <ShoppingBasketIcon />
                <span className='lintTwo BasketCount'>0</span>
            </div>
        </Link>






   </div>
            
    </nav>

<Home />
    </>

  )
}

export default Header