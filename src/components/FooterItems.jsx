import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './FooterItems.module.scss';
import arrowdown from '../img/arrowdown.svg';
function FooterItems() {

   const [listFirstActive, setListFirstActive] = useState(false);
   const [listSecondActive, setListSecondActive] = useState(false);
   const [listThirdActive, setListThirdActive] = useState(false);


   const listFirst = [classes.FooterListFirst];
   const listSecond = [classes.FooterListSecond];
   const listThird = [classes.FooterListThird];
   const btnFirst = [classes.FooterBtnFirst];
   const btnSecond = [classes.FooterBtnSecond];
   const btnThird = [classes.FooterBtnThird];
   if (listFirstActive) {
      listFirst.push(classes.active);
      btnFirst.push(classes.active);
   }
   if (listSecondActive) {
      listSecond.push(classes.active);
      btnSecond.push(classes.active);
   }
   if (listThirdActive) {
      listThird.push(classes.active);
      btnThird.push(classes.active);
   }

   return (
      <div className={classes.FooterItems}>
         <div className={classes.FooterColumn}>
            <button type='button' className={btnFirst.join(' ')} onClick={() => setListFirstActive(!listFirstActive)}>
               <h4 className={classes.BtnTitle}>About us</h4>
               <img src={arrowdown} alt="Arrow" />
            </button>
            <ul className={listFirst.join(' ')}>
               <li><Link to='#' className={classes.FooterNav}>Concept</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Franchise</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Business</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Restaurant signup</Link></li>
               <li><Link to='#' className={classes.FooterNav}>For Investors</Link></li>
            </ul>
         </div>
         <div className={classes.FooterColumn}>
            <button type='button' className={btnSecond.join(' ')} onClick={() => setListSecondActive(!listSecondActive)}>
               <h4 className={classes.BtnTitle}>Get help</h4>
               <img src={arrowdown} alt="Arrow" />
            </button>
            <ul className={listSecond.join(' ')}>
               <li><Link to='#' className={classes.FooterNav}>Read FAQs</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Restaurants</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Specialities</Link></li>
               <li><Link to='#' className={classes.FooterNav}>Sign up to deliver</Link></li>
               <li><button type='button' className={classes.Button_language}>
                  <span className={classes.Language_text}>English</span>
                  <img src={arrowdown} alt="Arrow" />
               </button></li>
            </ul>
         </div>
         <div className={classes.FooterColumn}>
            <button type='button' className={btnThird.join(' ')} onClick={() => setListThirdActive(!listThirdActive)}>
               <h4 className={classes.BtnTitle}>Contact us</h4>
               <img src={arrowdown} alt="Arrow" />
            </button>
            <ul className={listThird.join(' ')}>
               <li><Link to='#' className={classes.FooterContact}>Yellow kitchen Paris 11</Link></li>
               <li><Link to='#' className={classes.FooterContact}>69 avenue de la Republique 75011 Paris</Link></li>
               <li><Link to='tel:0800 111 126' className={classes.FooterNav}>0800 111 126</Link></li>
               <li><Link to='#' className={classes.FooterNav}>contact@yellowkitchens.com</Link></li>
            </ul>
         </div>
      </div>
   )
}
export default FooterItems;