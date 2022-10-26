import React, { useState } from 'react';
import logo from '../img/logo.svg';
import login from '../img/login.svg';
import basket from '../img/basket.svg';
import Arrow from '../img/arrow.svg';
import Phone from '../img/phone.svg';
import { Link } from 'react-router-dom';
import classes from '../components/Header.module.scss';
import '../components/Header.scss';
function Header() {

   const [visible, setVisible] = useState(false);
   const burgerShell = [classes.Burger_shell];
   const headerNav = [classes.Header_nav];
   const burgerBtn = [classes.Burger];

   if (visible) {
      burgerShell.push(classes.active);
      headerNav.push(classes.active);
      burgerBtn.push(classes.active);
   }


   return (
      <header className={classes.Header}>
         <div className="header__container">
            <div className={classes.Header_block}>
               <div className="header__logo">
                  <Link className='header__link' to='/' onClick={() => setVisible(false)}>
                     <img src={logo} alt="Logo" />
                  </Link>
               </div>
               <div className={classes.Header_body}>
                  <div className="header__btn header-button">
                     <button className='header-button__button' type='button'>
                        <img className='header-button__icon' src={login} alt="Login" />
                        <span className='header-button__text'>Log in</span>
                     </button>
                  </div>
                  <div className="header__btn header-button">
                     <button className='header-button__button' type='button'>
                        <img className='header-button__icon' src={basket} alt="Basket" />
                        <span className='header-button__text'>0</span>
                     </button>
                  </div>
                  <div className="header__burger">
                     <button className={burgerBtn.join(" ")} type='button' onClick={() => setVisible(!visible)}>
                        <div className={burgerShell.join(" ")}>
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </button>
                  </div>
                  <div className={headerNav.join(" ")}>
                     <div className={classes.Contact}>
                        <Link to="tel:0800 111 126" className={classes.Contact_link}>
                           <img src={Phone} alt="Phone" />
                           <span className={classes.Phone}>0800 111 126</span>
                        </Link>
                        <span className={classes.Work_hours}>8:00 - 22:00</span>
                     </div>
                     <ul className={classes.List_items}>
                        <li><Link className={classes.List_item} onClick={() => setVisible(false)} to="#">Delivery info</Link></li>
                        <li><Link className={classes.List_item} onClick={() => setVisible(false)} to="#">About us</Link></li>
                        <li><Link className={classes.List_item} onClick={() => setVisible(false)} to="#">Restaurants</Link></li>
                        <li><Link className={classes.List_item} onClick={() => setVisible(false)} to="#">Specialities</Link></li>
                     </ul>
                     <div className={classes.Language}>
                        <button type='button' className={classes.Button_language}>
                           <span className={classes.Language_text}>English</span>
                           <img src={Arrow} alt="Arrow" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}
export default Header;