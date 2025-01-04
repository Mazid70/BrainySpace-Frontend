import React, { useState } from 'react';
import 'animate.css'
const Banner = () => {
  const [isRotate, setRotate] = useState(true);
  setTimeout(() => {
    setRotate(false);
  },1000)
  return (
    <section className="text-white pt-20 h-screen">
      <div className="h-[700px] w-[650px] rounded-full bg-gradient-to-tr from-pink-900 to-violet-900 blur-[90px] absolute opacity-70 z-10 top-1/2 -translate-y-1/2 left-56"></div>
      <div className=" flex items-center mt-24 gap-5">
        <div className="z-20 flex-1 flex justify-center relative translate-x-14 animate__animated animate__fadeIn ">
          <div className="h-[520px] w-[320px] p-[6px] bg-gradient-to-b from-sky-500 to-pink-600 rounded-3xl z-50">
            <div className="h-full w-full bg-[#020223] rounded-3xl p-2">
              <img src="/assets/group.png" alt="" className="" />
            </div>
          </div>
          <div
            className={
              isRotate
                ? `z-40  h-[500px] w-[250px] p-[6px] bg-gradient-to-b from-pink-600 to-sky-500 rounded-3xl absolute top-5 left-52 -rotate-[7deg]`
                : `duration-500 transition-all h-[520px] w-[250px] p-[6px] bg-gradient-to-b from-pink-600 to-sky-500 rounded-3xl absolute left-36 z-40 -rotate-[16deg] top-10`
            }
          >
            <div className="h-full w-full bg-[#020223] rounded-3xl p-2">
              <img src="/assets/group.png" alt="" className="" />
            </div>
          </div>
          <div
            className={
              isRotate
                ? `z-30 h-[450px] w-[230px] p-[6px] bg-gradient-to-b from-sky-500 to-pink-600 rounded-3xl absolute left-48 top-12 -rotate-[12deg] `
                : `duration-500 transition-all h-[450px] w-[230px] p-[6px] bg-gradient-to-b from-sky-500 to-pink-600 rounded-3xl absolute left-20 z-30 -rotate-[25deg] top-40`
            }
          >
            <div className="h-full w-full bg-[#020223] rounded-3xl p-2">
              <img src="/assets/group.png" alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-[75px]">
            Learn Together <br /> Achieve More <br /> Collaborate for{' '}
            <span className=" bg-gradient-to-b from-pink-600 to-violet-600 inline-block text-transparent bg-clip-text">
              Success.
            </span>
          </h1>
          <p className="text-gray-400 font-semibold text-lg mt-5">
            BrainySpace is a collaborative study platform where students can
            connect, share resources, and work together on projects. It offers
            features like study groups, forums, and live chat to make learning
            more interactive and efficient
          </p>
          <div className=" bg-gradient-to-b from-pink-600 to-violet-600  rounded-md p-[3px] h-[70px] w-[230px] mt-10">
            <button className="bg-[#020223] h-full w-full rounded-md text-2xl font-bold">
              Explore now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
