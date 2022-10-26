import React from 'react';
import classes from './DeliveryCard.module.scss';
function DeliveryCard(props) {
   return (
      <div className={classes.Card}>
         <div className={classes.CardTitle}>
            {props.title}
         </div>
         <div className={classes.CardSubitle}>
            {props.subtitle}
         </div>
      </div>
   )
}
export default DeliveryCard;