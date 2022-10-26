import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ShowAll.module.scss';
function ShowAll(props) {
   return (
      <div className={classes.ShowAll}>
         <h3>{props.title}</h3>
         <Link className={classes.ShowLink} to='#'>show all</Link>
      </div>
   )
}
export default ShowAll;