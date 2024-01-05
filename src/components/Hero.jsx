import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="top-0 left-0 w-full h-screen object-cover"
      />
      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto p-4 absolute">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quibusdam nisi voluptatum tempore sed esse quasi minima.
            Repellendus, explicabo a?
          </p>
          <button className="bg-white text-black hover:bg-black hover:text-white hover:border-black duration-500">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
