import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../movie/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Rows(props) {
  const title = props.title;
  const fetchURL = props.fetchURL;
  const rowId = props.rowId;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);
  const sliderLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md: text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative   "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </div>
  );
}

export default Rows;
