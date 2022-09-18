import React, { useState } from "react";
import Images from "../assets/images/index";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function LogIn() {
  const { user, logIn } = UserAuth();
  // console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('') 
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <>
      <div className="w-full h-screen font-yekan-bakh">
        <img
          className="hidden sm:block absolute w-full h-full object-cover "
          src={Images.background}
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-2 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white p-12">
            <h1 className="text-3xl font-bold "> ورود </h1>
            {error ? <p  className='py=-3 bg-red-400 my-2'>{error}</p> :null}
            <form onSubmit={handleSubmit} className="flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded  "
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded "
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold  ">
                {" "}
                ورود
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="ml-2 " type="checkbox" name="" /> یادآوری{" "}
                </p>
              </div>
              <p className="py-8  ">
                <span className="text-gray-600"> به یاد بسپار</span>
                <Link to="./signup"> ثبت </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
