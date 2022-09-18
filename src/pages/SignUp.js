import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../assets/images/index";
import { UserAuth } from "../context/AuthContext";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen  font-yekan-bakh">
        <img
          className="hidden sm:block absolute w-full h-full object-cover "
          src={Images.background}
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-2 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white p-12">
            <h1 className="text-3xl font-bold "> ثبت نام </h1>
            <form className="flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                className="p-3 my-2 bg-gray-700 rounded  "
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded "
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={password}
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold  ">
                {" "}
                ثبت
              </button>
              <div className="flex  justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="ml-2 " type="checkbox" name="" /> یادآوری{" "}
                </p>
                <p>نیاز به راهنمایی</p>
              </div>
              <p className="py-8  ">
                <span className="text-gray-600">
                  هم اکنون مووی نت رو سابسکرایب کنید؟{" "}
                </span>
                <Link to="./login"> ورود</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
