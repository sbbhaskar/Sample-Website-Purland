import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import slideone from '../assets/slideone.png';
import SlideTwo from '../assets/SlideTwo.png';

const Slider = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: slideone,
      title: 'Welcome to Purland Logistics',
      buttonLabel: 'Explore Services',
    },
    {
      image: SlideTwo,
      title: 'Welcome to Purland Warehouse',
      buttonLabel: 'Explore Services',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ['100%', 0, 0] },
        }}
        className="h-[300px] md:h-[500px] w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay positioned after left arrow */}
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center text-white">
              <div className="pl-[60px] md:pl-[80px] pr-4 w-full max-w-[90%] md:max-w-[70%]">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-left">
                  {slide.title}
                </h2>
                <button
                  onClick={() => navigate('/services')}
                  className="btn1 mt-2 cursor-pointer"
                >
                  {slide.buttonLabel}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom positioning of Swiper arrows */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            z-index: 20;
            color: white;
            top: 50%;
            transform: translateY(-50%);
          }

          .swiper-button-prev {
            left: 10px !important;
          }

          .swiper-button-next {
            right: 10px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
