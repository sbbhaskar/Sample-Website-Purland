import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HandingStorage from '../assets/handing-storage.png';
import Distribution from '../assets/facilities-distribution.png';
import OtherServices from '../assets/add-hoc.jpeg';
import AmbientStorage from '../assets/AmbientStorage.png';
import Customs from '../assets/declaration.png';
import shipVideo from '../assets/ship.mp4';

const ServicesPortfolio = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Handling & Storage',
      image: HandingStorage,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
      link: '/services#handling-storage',
    },
    {
      title: 'Distribution',
      image: Distribution,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
          link: '/services#distribution',

    },
    {
      title: 'Other Services',
      image: OtherServices,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
      link: '/services#other-services',

    },
    {
      title: 'Ambient Storage',
      image: AmbientStorage,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
      link: '/services#ambient-storage',

    },
    {
      title: 'Customs Declarations',
      image: Customs,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
      link: '/excise-approval',

    },
    {
      title: 'Explore All Services',
      isVideo: true,
      videoSrc: shipVideo,
      text: 'Description here Description here Description here Description here...',
      buttonText: 'know more',
      link: '/services',
    },
  ];
        const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => {
        // const [isFlipped, setIsFlipped] = useState(false);

        const handleFlip = () => {
          if (!service.isVideo && window.innerWidth < 768) {
            setIsFlipped(!isFlipped);
          }
        };

        return (
          <div
            key={idx}
            className={`relative h-[320px] bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center transition-transform duration-500 group ${
              service.isVideo ? '' : 'hover:shadow-xl'
            }`}
          >
            {/* Image or Video with conditional flip */}
            <div
              className={`w-full h-40 mb-4 rounded overflow-hidden ${
                service.isVideo ? '' : 'relative perspective'
              }`}
              onClick={handleFlip}
            >
              {service.isVideo ? (
                <video
                  src={service.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div
                  className={`relative w-full h-full transform-style preserve-3d transition-transform duration-700 ${
                    isFlipped ? 'rotate-y-180' : ''} group-hover:rotate-y-180`}
                >
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="absolute w-full h-full backface-hidden rotate-y-180"> {/*Earlier it was 'rotate-y-180' */}
                    <img
                      src={service.image}
                      alt={`${service.title} back`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Static content */}
            <h3 className="text-xl font-bold text-blue-800">{service.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{service.text}</p>
            <button
              onClick={() => navigate(service.link || '/contact')}
              className="btn1 mt-4 cursor-pointer"
            >
              {service.buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesPortfolio;
