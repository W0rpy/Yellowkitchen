import React from 'react';
import cl from './DeliveryColumn.module.scss';
function DeliveryColumn({ img, title, subtitle }) {
   return (
      <div className={cl.DeliveryColumn}>
         <div className={cl.ColumnIcon}><img src={img} alt="Icon" /></div>
         <div className={cl.ColumnText}>
            <div className={cl.ColumnTitle}> {title}</div>
            <div className={cl.ColumnSubtitle}>{subtitle} </div>
         </div>
      </div>
   )
}
export default DeliveryColumn;