import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Movie(props) {
  const item = props.item;
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("لطفا ورود کنید و فیلم خود را ذخیره نمایید.");
    }
  };
  return (
<div className="w-[16px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2  ">
      <img    
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-[1] text-white opacity-0">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4  text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4  text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;