// Services.jsx
import React, { useState, useEffect } from 'react';
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
    title: 'Efficient Machinery for Modern Logistics',
  },
  {
    image: './images/machine2.png',
    title: 'Precision in Handling and Transport',
  },
  {
    image: './images/machine3.png',
    title: 'Advanced Storage Facilities',
  },
  {
    image: './images/slideone.png',
    title: 'Streamlined Solutions by Purland House',
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
              PHL provides a dedicated team who offer a trusted transport and delivery service across all ports. We work with both full and part loads, which can be arranged from each of the ports. PHL prides ourselves when it comes to providing tailored solutions for all of your logistical requirements and work hard to cover all your customs clearance needs. Due to its expansive size, PHL can offer storage from relatively small to large quantities.
            </p>
            <p>
              We have a professional team that can complete EMCS movements for alcohol arriving into UK ports. PHL has invested in specialist HMRC approved software which enables accurate, compliant stock reporting with full traceability. You can have peace of mind as they are then delivered into bonded warehouse under our registered consignor status. With a focus on customer satisfaction, we make sure to go the extra mile, and we also have our movement guarantee if required. PHL ensures that clients' goods are kept safe and secure, however sufficient level of insurance is an important consideration with all types of stock. <button
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
              PHL has a team of specialists that arranges imports & exports of goods between the UK, the mainland Europe and internationally. Our own fleet with professional drivers can provide efficient and safe delivery around the UK. We strive in adhering to key targets provided to us by our broad range of clients. Team members are experienced, knowledgeable and provide a competitive friendly personal service. They have at their disposal various types of equipment via a wide selection of routings to provide a choice of options dependent upon required timeframe and budgets.
            </p>
            <p>
              PHL is experienced in a combination of road and rail freight across mainland Europe, using trailers, and pallet wide containers, ensuring that customers’ multi modal requirements are met. We also provide economical European cross border road and sea freight services, delivering door to door full and partial loads. Shipping cargo by sea is the most cost-effective freight option to long-distance destinations. PHL has a team of experts that is dedicated to finding the right solution for your business. Over the years PHL has built trusted relationships with established and renowned shipping lines, providing PHL with a broad range of equipment, services, routes and destinations, available for both import and export.
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
      Our value-added services include obtaining essential documentation required to export or import of various goods, subject to product and destination. Documents such as Certificates of Age, Certificates of Origin, Certificates of Free Sale, EUR 1, Certificates on Non-Manipulation are readily obtained as and when required.
    </p>
    <p className="mb-4">
      PHL also offers clients use of an escrow facility, providing protection to both buyer and seller where required. Escrow is Free of Charge when our Logistics services are used. PHL will inspect and verify the stock and control the funds, we only release control over the funds & stock once both parties are in agreement and this has been confirmed.
    </p>
    <p className="mb-4">
      Additionally, PHL offer a full rework facility, whether it be packing goods into gift boxes, application (using a state-of-the-art commercial labelling machine) and removal of UKDS (UK duty stamps) and any other stamps.
    </p>
  </div>

  {/* Ambient Storage */}
  <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-gray-800 text-justify">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">Ambient Storage</h2>
    <p className="mb-4">
      PHL provides all industry sectors with professional, cost-effective supply chain solutions, ensuring swift response and seamless movement of goods, to ensure that they are delivered in optimal condition. Products stored include, gifts, soft and energy drinks, alcohol, toys, we work closely with clients to develop a customised global logistic solution for all their ambient goods needs.
    </p>

    <p className="mt-6">
      📞 Tel: +44 (0)20 8310 7999
      <br />
      <a href="mailto:info@purlandhouse.com" className="text-blue-600 hover:underline">
        📧 Email: info@purlandhouse.com
      </a>
    </p>
  </div>
  
</div>

       
      </div>
    </>
  );
};

export default Services;
