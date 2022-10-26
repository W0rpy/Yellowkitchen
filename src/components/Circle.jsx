import React from 'react';
import classes from './Circle.module.scss';
function Circle(props) {
   return (
      <div className={classes.CircleShell}>
         <div className={classes.Circle}>
            <span>{props.number}</span>
         </div>
         <div className={classes.CircleText}>{props.text}</div>
      </div>

   )
}
export default Circle;