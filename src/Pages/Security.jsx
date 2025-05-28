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
    title: 'description here',
    image: SecurityImage1,
  },
  {
    title: 'description here',
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
        Our Commitment to excellence
      </h2>

      <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni nostrum similique praesentium consequuntur maxime eos quia, voluptatem sint molestiae delectus harum saepe, dolorum repellendus libero, ut provident quae assumenda? Necessitatibus assumenda distinctio sed, nisi dolorum libero quibusdam mollitia atque ipsum illo beatae saepe dolor quidem.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eligendi molestiae ullam aspernatur velit commodi, est mollitia eaque? Laborum, placeat natus nulla deleniti repellendus fugit assumenda, hic magni officiis nisi facere. Itaque dicta non laboriosam, accusantium tempora, beatae unde architecto ipsam vero ducimus eos sit sed mollitia voluptatibus dolorem doloribus!
        </p>

        <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nobis est? Distinctio molestias amet ab vel ipsam? Delectus sed illo autem cupiditate, beatae voluptatibus aspernatur eum ex porro magnam.        </p>

        <p>
          📞 Tel: Phone number here
          <br />
          📧 Email:{" "}
          <a href="mailto:bhaskar.sb@outlook.com" className="text-blue-600 hover:underline">
            bhaskar.sb@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Security;
