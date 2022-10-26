import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FooterSocialNetwork.module.scss';
function FooterSocialNetwork({ icons }) {
   return (
      <div className={classes.FooterSocialNetwork}>
         <div className={classes.SocialNetworks}>
            {icons.map((icon, i) =>
               <div className={classes.LogoNetwork} key={i + 1}>
                  <Link to='#'><img src={icon.picture} alt="Logo Network" /></Link></div>
            )}
         </div>
         <div className={classes.Description}>
            <Link className={classes.DescriptionItems} to='#'>Privacy Policy</Link>
            <Link className={classes.DescriptionItems} to='#'>Terms</Link>
            <span>© 2020 Yellow kitchen</span>
         </div>
      </div >
   )
}
export default FooterSocialNetwork;