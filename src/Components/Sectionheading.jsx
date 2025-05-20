import React from 'react'

const Sectionheading = ({title}) => {
  return (
    <>
          <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-800 relative inline-block 
                      after:block after:w-[100px] after:h-[2px] after:bg-blue-700 
                      after:absolute after:left-1/2 after:-translate-x-1/2 
                      after:animate-pulse">
                      {title}
                  </h2>
              </div>
            </div>
    </>
);

}

export default Sectionheading
