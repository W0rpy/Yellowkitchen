import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import yellowkitchen from '../img/yellowkitchen.svg';
import appstore from '../img/app_store.png';
import googleplay from '../img/google_play.png';
import FooterSocialNetwork from './FooterSocialNetwork';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';
import instagramicon from '../img/instagramicon.svg';
import FooterItems from './FooterItems';

function Footer() {
   const iconNetworks = [{ picture: twitter }, { picture: facebook }, { picture: instagramicon }]

   return (
      <footer className={classes.Footer}>
         <div className="footer__container">
            <div className={classes.FooterBlock}>
               <div className={classes.FooterContent}>
                  <div className={classes.FooterLogos}>
                     <div className={classes.FooterLogo}>
                        <Link className={classes.FooterLink} to='/'>
                           <img src={yellowkitchen} alt="Logo" className={classes.Yellowkitchen} />
                        </Link>
                     </div>
                     <div className={classes.Line}></div>
                     <div className={classes.LogosItems}>
                        <Link to='#'><img src={appstore} alt="App store" /></Link>
                        <Link to='#'><img src={googleplay} alt="App store" /></Link>
                     </div>
                  </div>
                  <FooterItems />
               </div>
               <FooterSocialNetwork icons={iconNetworks} />
            </div>
         </div>
      </footer >
   )
}
export default Footer;