import React, { useRef } from 'react';
import ShowAll from './ShowAll';
import raviolli from '../img/raviolli.svg';
import pizza from '../img/pizza.svg';
import vegan from '../img/vegan.svg';
import bagel from '../img/bagel.svg';
import burgericon from '../img/burgericon.svg';
import chicken from '../img/chicken.svg';
import fish from '../img/fish.svg';
import arrowslider from '../img/arrowslider.svg';
import fishnchips from '../img/fishnchips.svg';
import classes from './Specialities.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
function Specialities() {

   const photos = [{ id: 1, picture: bagel, subtitle: 'Bagel' }, { picture: burgericon, subtitle: 'Burger', id: 2 }, { picture: chicken, subtitle: 'Chicken', id: 3 }, { picture: fish, subtitle: 'Fish', id: 4 }, { picture: fishnchips, subtitle: 'Fish’Chips', id: 5 }, { picture: vegan, subtitle: 'Salads', id: 6 }, { picture: pizza, subtitle: 'Pizza', id: 7 }, { picture: raviolli, subtitle: 'Pasta', id: 8 }]
   const swiperSpecialNavPrevRef = useRef(null);
   const swiperSpecialNavNextRef = useRef(null);
   return (
      <section className={classes.Specialities}>
         <div className="specialities__container">
            <div className={classes.SpecialitiesBlock}>
               <div className={classes.SpecialitiesContent}>
                  <ShowAll title='Specialities' />
               </div>
               <div className={classes.SpecialitiesSlider}>
                  <Swiper
                     modules={[Navigation]}
                     navigation={{
                        nextEl: swiperSpecialNavPrevRef.current,
                        prevEl: swiperSpecialNavNextRef.current,
                     }}
                     className={classes.SliderSpecialities}
                     loop={true}
                     breakpoints={
                        {
                           320: {
                              slidesPerView: 1,
                           },
                           360: {
                              slidesPerView: 2,
                           },
                           480: {
                              slidesPerView: 3,
                           },
                           625: {
                              slidesPerView: 4,
                              spaceBetween: 15,
                           },
                           991.98: {
                              slidesPerView: 6,
                           },
                           1199.98: {
                              slidesPerView: 8,
                              spaceBetween: 24,
                           }
                        }
                     }

                     onSwiper={(swiper) => console.log(swiper)}
                     onInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperSpecialNavPrevRef.current;
                        swiper.params.navigation.nextEl = swiperSpecialNavNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                     }}
                  >
                     {photos.map((photo) => <SwiperSlide key={photo.id}><div className={classes.SliderPhoto}>
                        <img src={photo.picture} alt="Slider icon" />
                        <span>{photo.subtitle}</span>
                     </div>
                     </SwiperSlide>)}
                     <div className={`${classes.swiperSpecialNavPrevRef}`} ref={swiperSpecialNavPrevRef}><img src={arrowslider} alt="Arrow Slider" /></div>
                     <div className={`${classes.swiperSpecialNavNextRef}`} ref={swiperSpecialNavNextRef}><img src={arrowslider} alt="Arrow Slider" /></div>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Specialities;