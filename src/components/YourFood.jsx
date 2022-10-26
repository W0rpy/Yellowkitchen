import React from 'react';
import classes from './YourFood.module.scss';
import DeliveryCard from './DeliveryCard';
import arrowtoplate from '../img/arrowtoplate.svg';
import plate from '../img/plate.jpg';
import rucola from '../img/rucola.png';
import deliveryman from '../img/deliveryman.svg';
import heart from '../img/heart.svg';
import watch from '../img/watch.svg';
import DeliveryColumn from './DeliveryColumn';
function YourFood() {
   return (
      <section className={classes.DeliveryPage}>
         <div className="delivery__container">
            <div className={classes.DeliveryBlock}>
               <div className={classes.DeliveryContent}>
                  <div className={classes.DeliveryTitle}>
                     Your Food court at home
                  </div>
                  <div className={classes.DeliveryCards}>
                     <DeliveryCard title="Delivery" subtitle="Order in" />
                     <DeliveryCard title="Takeout" subtitle="Grab and go" />
                  </div>
               </div>
               <div className={classes.DeliveryPicture}>
                  <div className={classes.DeliveryImage}>
                     <div className={classes.PictureHerb}>
                        <img src={rucola} alt="rucola" />
                     </div>
                     <div className={classes.PicturePlate}>
                        <img src={plate} alt="plate" />
                     </div>
                     <div className={classes.PictureArrow}>
                        <img src={arrowtoplate} alt="Arrow to plate" />
                        <span>Fresh salad, Il Pasifigio</span>
                     </div>
                  </div>

               </div>
            </div>
            <div className={classes.DeliveryColumns}>
               <DeliveryColumn img={watch} title={'delivery in all paris'} subtitle={'in less than 30 minutes'} />
               <DeliveryColumn img={deliveryman} title={'Free delivery'} subtitle={' from 29 euross'} />
               <DeliveryColumn img={heart} title={'Only fresh'} subtitle={'and French products'} />
            </div>
         </div>
      </section>
   )
}
export default YourFood;