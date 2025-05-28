// Services.jsx
import React, { useState, useEffect } from 'react';
// import CustomDeclaration from '../assets/customdeclaration.png';
import InsuranceModal from '../Components/InsuranceModal'; // import the modal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './FlipCard.css';
import Sectionheading from '../Components/Sectionheading';
import FreightCards from '../Components/FreightCards';

const slides = [
  {
    image: './images/machine1.png',
    title: 'description here',
  },
  // {
  //   image: './images/machine2.png',
  //   title: 'description here',
  // },
  {
    image: './images/machine3.png',
    title: 'description here',
  },
  {
    image: './images/slideone.png',
    title: 'description here',
  },
];

const Services = () => {

  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
  const hash = location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }
}, [location]);



  return (
    <>
    <InsuranceModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      {/* Slider */}
      <div className="relative mt-20 mb-12 px-[5px]">
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
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl shadow-md bg-white"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent z-10 px-6 sm:px-10 md:px-16 pb-6">
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  {slide.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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

      {/* Heading */}
      <Sectionheading title="Our Services" />

      {/* Services Content */}
      <div className="px-4 sm:px-10 md:px-20 py-10 space-y-16">

        {/* Handling & Storage */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-4/5 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="./images/handlingstorage1.jpg"
                  alt="Handling Storage Front"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="./images/handlingstorage1.jpg"
                  alt="Handling Storage Back"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/1 text-gray-800 text-justify space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Handling & Storage</h2>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium. Tenetur nihil temporibus reiciendis voluptatum iure corporis sequi optio aliquam eaque totam excepturi voluptates dolor iste pariatur minima quasi, fuga animi nisi natus aliquid magnam commodi nemo fugiat neque. Dolorum aliquid dolores, repellendus maiores culpa quaerat sint ex dignissimos, distinctio exercitationem eum! Consequuntur vitae rem, odit aspernatur labore adipisci voluptatem iure eligendi inventore possimus rerum officiis hic distinctio numquam recusandae repudiandae provident, aliquid obcaecati!
            </p>
            <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptates incidunt id laudantium nostrum repellat. Eligendi at obcaecati perferendis, esse doloribus, voluptatibus dolore nostrum illum unde, quod recusandae. Molestias, vel omnis? Aliquid atque molestiae officia, eveniet, enim labore dolorem ducimus explicabo fugit repudiandae maxime laborum placeat molestias soluta fugiat unde minima similique. Dolorem illo pariatur velit laboriosam accusamus quia numquam. Perspiciatis ex debitis iste distinctio eum! Minus aperiam deleniti nulla voluptates, dolorem doloribus molestias ex doloremque ipsum. Dolor dolores accusamus fugiat excepturi at distinctio animi soluta ducimus, illo sequi voluptas maiores! Amet reiciendis explicabo aut excepturi, est quas ipsum. <button
    onClick={() => setModalOpen(true)}
    className="text-blue-600 font-semibold hover:underline ml-1"
  >
    Find out more
  </button>.
            </p>
          </div>
        </div>

        {/* Distribution */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-2/5 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="./images/distribution1.jpg"
                  alt="Distribution Front"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="./images/distribution1.jpg"
                  alt="Distribution Back"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/1 text-gray-800 text-justify space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Distribution</h2>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero perspiciatis provident consequatur quibusdam repudiandae. Tempora repudiandae quisquam magni quis beatae facere, tenetur qui! Nemo magnam amet assumenda voluptates ad fuga laboriosam laudantium aperiam asperiores nobis reiciendis labore ab id illo vel cumque, ea facere. Magnam aspernatur ad unde odio, quidem, pariatur obcaecati ex repellat exercitationem suscipit esse. Perferendis necessitatibus qui provident voluptas eius sint rerum neque omnis. Molestias ab quisquam molestiae vel totam esse fugit facere deserunt consectetur cumque et officia, animi, corrupti natus. Debitis odio ipsa delectus blanditiis provident!
            </p>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti delectus non sunt magni harum asperiores, magnam nesciunt in aliquid laudantium perferendis voluptatibus! Nostrum dolorum quibusdam labore asperiores dolores iste veniam, dicta in non incidunt, magni aliquid, temporibus velit molestias corrupti fugiat voluptates iusto! Blanditiis aliquid fuga, ex, placeat quo deleniti corporis excepturi voluptas mollitia, ab unde cum quos ut laborum sunt quia atque maiores quas magni necessitatibus! Facilis minus id eos corrupti dolorum officiis quidem aliquid dicta ipsa. Ipsam itaque perferendis fugiat voluptates voluptatibus assumenda deleniti architecto aliquid voluptate culpa! Aliquam odio dolores aspernatur similique at doloribus odit iure, ipsum, nisi nostrum recusandae dolore iusto nobis consectetur eum delectus.
            </p>
          </div>
        </div>
            <FreightCards />
{/* Other Services & Ambient Storage */}
{/* <div className="space-y-12 px-4 sm:px-10 md:px-20">*/}
{/* <div className="mt-0 space-y-12 px-4 sm:px-10 md:px-20"> */}
<div className="pt-0 mt-0 space-y-12 px-4 sm:px-10 md:px-20">
  
  {/* Other Services */}
  <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-gray-800 text-justify">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Other Services</h2>
    <p className="mb-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nihil magnam earum saepe cupiditate consectetur sequi veniam vitae culpa suscipit! Illum quasi provident eius! Commodi nostrum, corporis numquam modi, architecto id veniam beatae eius, quidem a quod nobis reprehenderit harum ad accusamus quas fugiat earum!
    </p>
    <p className="mb-4">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat non iusto, fugiat commodi sed pariatur magnam dolorem laborum perferendis nulla, voluptate et necessitatibus dolores culpa quasi iure cum quibusdam voluptatum aperiam, aut modi. Aut laborum quo hic! Quaerat corrupti pariatur quibusdam ipsam, temporibus sed tenetur explicabo natus repudiandae enim numquam consequuntur eos fuga quod aliquam dolorem quae atque doloribus placeat!
    </p>
    <p className="mb-4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores, soluta cumque eum inventore ipsum facilis libero velit nesciunt maxime repellat aperiam accusantium aut atque incidunt sint quae adipisci! Amet nostrum debitis unde.
    </p>
  </div>

  {/* Ambient Storage */}
  <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-gray-800 text-justify">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Ambient Storage</h2>
    <p className="mb-4">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quasi expedita sed repellat quibusdam repellendus voluptatum nam quaerat quae ea dolor nemo commodi corporis, eaque rerum optio suscipit hic cupiditate, animi, molestias molestiae illum? Natus laudantium minima maxime odit iure nesciunt sint consequatur a totam dolor, suscipit delectus non quod amet voluptatem veritatis mollitia numquam qui?
    </p>

    <p className="mt-6">
      📞 Tel: Phone number here
      <br />
      <a href="mailto:bhaskar.sb@outlook.com" className="text-blue-600 hover:underline">
        📧 Email: bhaskar.sb@outlook.com
      </a>
    </p>
  </div>
  
</div>

       
      </div>
    </>
  );
};

export default Services;
