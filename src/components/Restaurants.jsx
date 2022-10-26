import React, { useRef } from 'react';
import classes from './Restaurants.module.scss';
import ShowAll from './ShowAll';
import burger from '../img/burger.png';
import pasta from '../img/pasta.png';
import salad from '../img/salad.png';
import urbanfood from '../img/urbanfood.png';
import arrowslider from '../img/arrowslider.svg';
import burgerbase from '../img/burgerbase.png';
import pastabase from '../img/pastabase.png';
import urbanfoodbase from '../img/urbanfoodbase.png';
import saladbase from '../img/saladbase.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function Restaurants() {
   const swiperNavPrevRef = useRef(null);
   const swiperNavNextRef = useRef(null);

   return (
      <section className={classes.Restaurants}>
         <div className="restaurants__container">
            <div className={classes.RestaurantsBody}>
               <div className={classes.RestaurantsContent}>
                  <ShowAll title='Restaurants' />
               </div>
               <div className={classes.RestaurantsSlider}>
                  <Swiper
                     modules={[Navigation, Autoplay]}
                     /* navigation */
                     navigation={{
                        nextEl: swiperNavPrevRef.current,
                        prevEl: swiperNavNextRef.current,
                     }}
                     className={classes.SliderMain}
                     loop={true}
                     autoplay={true}
                     breakpoints={
                        {
                           320: {
                              slidesPerView: 1,
                           },
                           625: {
                              slidesPerView: 2,
                              spaceBetween: 15,
                           },
                           991.98: {
                              slidesPerView: 3,
                           },
                           1199.98: {
                              slidesPerView: 4,
                              spaceBetween: 22,
                           }
                        }
                     }
                     /*  onSlideChange={() => console.log('slide change')} */
                     onSwiper={(swiper) => console.log(swiper)}
                     onInit={(swiper) => {
                        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                        swiper.params.navigation.nextEl = swiperNavNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                     }}
                  >
                     <SwiperSlide><div className={classes.Slide}> <img src={burger} className={classes.MainPhoto} alt="burger" /><img src={burgerbase} alt="burger" className={classes.FirstSlide} /></div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className={classes.Slide}>
                           <img src={pasta} alt="pasta" className={classes.MainPhoto} /><img src={pastabase} alt="pasta" /></div></SwiperSlide>
                     <SwiperSlide>
                        <div className={classes.Slide}> <img src={salad} alt="salad" className={classes.MainPhoto} /><img src={saladbase} alt="salad" /></div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className={classes.Slide}><img src={urbanfood} alt="urbanfood" className={classes.MainPhoto} /><img src={urbanfoodbase} alt="urbanfood" /></div></SwiperSlide>
                     <div className={`${classes.swiperNavPrevRef}`} ref={swiperNavPrevRef}><img src={arrowslider} alt="Arrow Slider" /></div>
                     <div className={`${classes.swiperNavNextRef}`} ref={swiperNavNextRef}><img src={arrowslider} alt="Arrow Slider" /></div>
                  </Swiper>
               </div>
            </div>
         </div>
      </section >
   )
}
export default Restaurants;