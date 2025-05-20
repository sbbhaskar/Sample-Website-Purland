import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import SecurityImage1 from '../assets/Security.png';
import SecurityImage2 from '../assets/Security1.png';

const slides = [
  {
    title: 'Advanced 24/7 Surveillance System',
    image: SecurityImage1,
  },
  {
    title: 'Secure Storage You Can Trust',
    image: SecurityImage2,
  },
];

const Security = () => {
  return (
    <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
      {/* Swiper Slider Banner */}
      <div className="relative mb-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ['100%', 0, 0] },
          }}
          className="w-full h-[350px] rounded-xl shadow-md"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[350px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 z-10 flex items-center text-white">
                <div className="pl-[60px] md:pl-[80px] pr-4 w-full max-w-[90%] md:max-w-[70%]">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-left">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper arrows customization */}
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

      {/* Page Content */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
        Our Commitment to Security
      </h2>

      <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
        <p>
          At <span className="font-semibold">Purland House Ltd (PHL)</span>, the safety and security of our clients' goods is our highest priority. All warehouse facilities are safeguarded by advanced surveillance infrastructure, including high-definition CCTV systems and comprehensive alarm mechanisms, operating continuously — 24 hours a day, 365 days a year.
        </p>

        <p>
          Our integrated monitoring solution comprises both internal and external surveillance cameras equipped with night vision capabilities, ensuring complete visibility across all areas of the premises. To reinforce this robust framework, live footage is actively monitored by <b>two independent, accredited security partners</b>, providing an added layer of scrutiny and operational integrity.
        </p>

        <p>
          This multi-tiered security strategy ensures full traceability, accountability, and peace of mind for traders entrusting their goods to PHL’s care — whether for short-term storage or long-term bonded warehousing.
        </p>

        <p>
          📞 Tel: +44 (0)20 8310 7999
          <br />
          📧 Email:{" "}
          <a href="mailto:info@purlandhouse.com" className="text-blue-600 hover:underline">
            info@purlandhouse.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Security;
