import React from 'react';
import './Map.scss';
import map from '../img/map.jpg';
function Map() {
   return (
      <section className='map'>
         <div className="map__container">
            <div className='map__image'>
               <img src={map} alt="map" />
            </div>
         </div>
      </section>
   )
}
export default Map;