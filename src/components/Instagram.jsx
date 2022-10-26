import React from 'react';
import classes from './Instagram.module.scss';
import photoInst_1 from '../img/instagram_1.png';
import photoInst_2 from '../img/instagram_2.png';
import photoInst_3 from '../img/instagram_3.png';
import photoInst_4 from '../img/instagram_4.png';
function Instagram() {
   return (
      <section className={classes.Instagram}>
         <div className="instagram__container">
            <div className={classes.InstagramHashtag}>
               <div className={classes.Hashtag}>#YellowKitchens <span>in instagram</span></div>
            </div>
            <div className={classes.InstagramPhotos}>
               <div className={classes.InstagramPhoto}><img src={photoInst_1} alt="Photo in instagram" /></div>
               <div className={classes.InstagramPhoto}><img src={photoInst_2} alt="Photo in instagram" /></div>
               <div className={classes.InstagramPhoto}><img src={photoInst_3} alt="Photo in instagram" /></div>
               <div className={classes.InstagramPhoto}><img src={photoInst_4} alt="Photo in instagram" /></div>
            </div>
         </div>
      </section>
   )
}
export default Instagram;