import React from "react";

const Heading = (props) => {
  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="relative bg-black shadow-xl sm:rounded-2xl sm:overflow-hidden text-center">
          <p class="mt-10 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">{props.title}</p>
          <p class="max-w-xl mb-10 mt-5 mx-auto text-xl text-gray-400">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;