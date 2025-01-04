import React from 'react';

const Card = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center relative ">
      <div className="bg-[url(/assets/one.png)] bg-no-repeat bg-right-bottom h-full w-full absolute z-20 "></div>
      <div className="bg-[#230C71] blur-[90px] w-[800px] h-[800px] bg-opacity-60 rounded-full absolute  top-0 right-40"></div>
      <div className="h-64 w-72  backdrop-blur-lg z-30">
        hjkdfhjkfsdhg
      </div>
    </div>
  );
};

export default Card;