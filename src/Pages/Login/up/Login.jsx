import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { MdLockOutline } from 'react-icons/md';

const Login = () => {
  const [isHide, setHide] = useState(true);
  const makehide = () => {
    setHide(!isHide);
  };
  return (
    <form action="">
      <div className="relative ">
        <input
          type="text"
          name=""
          className="bg-[#3A3053] h-12 rounded-md w-72 pl-12"
          placeholder="Email"
        />
        <FaRegUser className=" absolute text-[#874CD1] text-lg top-4 left-3" />
      </div>
      <div className="relative mt-5">
        <input
          type={isHide ? 'password' : 'text'}
          name=""
          className="bg-[#3A3053] h-12 rounded-md w-72 pl-12"
          placeholder="Password"
        />
        <MdLockOutline className=" absolute text-[#874CD1] text-xl top-4 left-3" />
        {isHide ? (
          <AiOutlineEye
            onClick={() => makehide()}
            className="absolute text-lg text-white top-4 right-4"
          />
        ) : (
          <AiOutlineEyeInvisible
            onClick={() => makehide()}
            className="absolute text-lg text-white top-4 right-4"
          />
        )}
      </div>
      <div className="relative mt-5">
        <input
          type="submit"
          value="Log in"
          className="bg-[#864CCF] h-12 rounded-md w-72 font-semibold "
        />
        <IoMdLogIn className=" absolute  text-lg top-4 left-24" />
      </div>
    </form>
  );
};

export default Login;
