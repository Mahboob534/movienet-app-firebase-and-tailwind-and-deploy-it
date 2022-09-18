import React from "react";
import Images from "../assets/images/index";
import SavedShows from "../components/saveShow/SavedShows";
function Account() {
  return (
    <>
      <div className="w-full h-screen text-white relative ">
        <img
          className="hidden sm:block absolute w-full h-[400px] object-cover "
          src={Images.background}
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] ">
          <div className="absolute top-[10%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold"> نمایش های من</h1>
          </div>
        </div>
        <SavedShows/> 
      </div>
    </>
  );
}

export default Account;
