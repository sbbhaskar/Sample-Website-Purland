import React from 'react'

const Video = () => {
  return (
    <>
            <div className="relative w-full">
        <video
          className="w-full max-h-[200px] object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/video/Banner for contact form.mp4" type="video/mp4" />
          Connecting with you...
        </video>

        {/* Overlay Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold bg-opacity-50 px-4 py-2 rounded-lg">
            Connect with us
          </h1>
        </div>
      </div>
    </>
  )
}

export default Video;
