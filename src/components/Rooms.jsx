import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 m-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold pl-2">Fine Interior Rooms</h3>
        <p className="pt-4 pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          itaque? Quos distinctio dignissimos architecto tempore!
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2 pl-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
