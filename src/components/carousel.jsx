import React, { useEffect, useRef } from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// swiper style
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Carousel() {
  const SwiperStyle = { backgroundColor: '#fffcf2' };
  const SwiperSlideStyle = { display: 'flex', justifyContent: 'center' };

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper; 
    const handleMouseEnter = () => { swiperInstance.autoplay.stop(); }; 
    const handleMouseLeave = () => { swiperInstance.autoplay.start(); }; 
    
    swiperRef.current.addEventListener('mouseenter', handleMouseEnter); 
    swiperRef.current.addEventListener('mouseleave', handleMouseLeave); 
    
    return () => { 
      swiperRef.current.removeEventListener('mouseenter', handleMouseEnter); 
      swiperRef.current.removeEventListener('mouseleave', handleMouseLeave); 
    };
  },[])

  return (
    <div>
        <Swiper
            className={`Swiper_Layout`}
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            style={SwiperStyle}
            loop={true}
            autoplay={{
              delay: 1000, 
              disableOnInteraction: false  
            }}
            spaceBetween={50}
            slidesPerView={5}
        >
        {Array.from({length: 10}).map((_, index) => (
            <SwiperSlide key={index} style={SwiperSlideStyle}>
                <img src="/logo.png" alt="logo" className='logo-img-filter' />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}
