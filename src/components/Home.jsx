import React from 'react';
import YourFood from './YourFood';
import Restaurants from './Restaurants';
import DeliveryAddress from './DeliveryAddress';
import Specialities from './Specialities';
import Map from './Map';
import Lemons from './Lemons';
import Instagram from './Instagram';
function Home() {
   return (
      <div style={{ paddingTop: '100px ' }}>
         <YourFood />
         <Restaurants />
         <DeliveryAddress />
         <Specialities />
         <Lemons />
         <Map />
         <Instagram />
      </div>
   )
}
export default Home;