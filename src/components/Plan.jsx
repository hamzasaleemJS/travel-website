import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          reiciendis?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          repellendus necessitatibus dicta consequatur minus? Veniam, aspernatur
          tempore adipisci dolore voluptates eaque ducimus non, quam fugiat
          facilis dignissimos obcaecati doloremque accusamus?
        </p>
        <div>
          <button className="border-black mr-4 hover:bg-black hover:text-white duration-500">
            Learn More
          </button>
          <button className="bg-black text-white hover:bg-white hover:text-black hover:border-black duration-500">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
