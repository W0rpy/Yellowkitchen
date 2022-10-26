import React, { useState } from 'react';
import classes from './DeliveryAddress.module.scss';
function DeliveryAddress() {
   const [inputValue, setInputValue] = useState('');

   return (
      <section className={classes.DeliveryAddress}>
         <div className="delivery-address__container">
            <div className={classes.AddressForm}>
               <div className={classes.FormContent}>
                  <div className={classes.FormTitle}>
                     Your nearest restaurants
                  </div>
                  <div className={classes.FormSubtitle}>
                     Each kitchen works with its own delivery area to deliver food to you as soon as possible
                  </div>
               </div>
               <div className={classes.FormAddress}>
                  <input type="text" placeholder='Enter delivery address' value={inputValue} onChange={e => setInputValue(e.target.value)} className={classes.FormInput} />
                  <button className={classes.FormBtn} onClick={(e) => e.preventDefault()} type='button'>send</button>
               </div>
            </div>
         </div>
      </section>
   )
}
export default DeliveryAddress;