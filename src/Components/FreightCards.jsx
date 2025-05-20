import React from 'react';

const FreightCards = () => {
  const cards = [
    {
      title: 'Air Freight',
      img: '/src/assets/facilities-distribution.png',
    },
    {
      title: 'Ocean Freight',
      img: '/src/assets/ocean freight.png',
    },
    {
      title: 'Multi Modal Freight',
      img: '/src/assets/multimodalfreight.png',
    },
  ];

  return (
    <div className="mb-0">
    <div className="flex justify-center items-center gap-8 p-6 flex-wrap">
      {cards.map((card, idx) => (
        <div key={idx} className="w-72 h-48 perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden bg-white">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Title on top of image */}
              <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-2">
                <h2 className="text-lg font-bold">{card.title}</h2>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 text-white flex items-center justify-center rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FreightCards;
