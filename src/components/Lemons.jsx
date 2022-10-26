import React from 'react';
import classes from './Lemons.module.scss';
import Circle from './Circle';
function Lemons() {
   return (
      <section className={classes.Lemons}>
         <div className="lemons__container">
            <div className={classes.LemonsBody}>
               <Circle number='1' text='kitchen' />
               <Circle number='11' text='specialties' />
               <Circle number='11' text='restaurants' />
               <Circle number='1' text='transport costs' />
            </div>
         </div>
      </section>
   )
}
export default Lemons;