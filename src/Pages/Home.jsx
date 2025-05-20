import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import Slider from '../Components/Slider';
import ServicesPorfolio from '../Components/ServicesPorfolio';
import Intro from '../Components/Intro';
import TextService from '../Components/TextService';

const Home = () => {

  return (
    <div className="pt-16"> {/* Banner Slider */}
      <Slider />

      <div className="text-center px-4 md:px-12 py-10 text-lg md:text-xl font-medium text-gray-800">
        {/* Intro */}
        <Intro />
      </div>

      <section className="px-4 md:px-12 pb-12"> {/* Services */}
        <TextService />
        <ServicesPorfolio />
      </section>
    </div>
  );
};

export default Home;