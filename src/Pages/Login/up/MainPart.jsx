import Login from './Login';

const MainPart = () => {
  return (
    <main className=" text-white ">
      <div className="bg-orange-300 h-[300px] w-[300px] rounded-full blur-[90px] opacity-40 absolute bottom-0 "></div>
      <div className="bg-sky-300 h-[300px] w-[300px] rounded-full blur-[90px] opacity-35 absolute top-0 right-0"></div>
      <section className=" flex justify-center items-center">
        <div className="bg-[#2F2848] flex-1 flex justify-center flex-col  items-center min-h-screen">
          <h1 className="font-bold text-5xl mb-10 text-left">
            Log <span className="text-[#874CD1]">In</span>
          </h1>
          <Login />
          <h1 className="mt-5">
            Don't have an Accout?{' '}
            <span className="font-semibold hover:underline hover:text-[#864CCF]">
              Register
            </span>
          </h1>
        </div>
        <div className="flex-1 bg-[#342951] min-h-screen flex justify-center flex-col items-center ">
          <div className="h-[500px] w-[500px]  rounded-full bg-white bg-opacity-10 relative">
            <img src="/assets/file.png" alt="" className="absolute bottom-20" />
          </div>
          <h1 className="font-bold text-4xl mb-10 mt-5">
            Brainy<span className="text-[#874CD1]">Space</span>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default MainPart;
