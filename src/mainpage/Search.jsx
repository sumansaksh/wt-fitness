import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import SigleCard from "./SigleCard.jsx";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://devapi.wtfup.me/gym/places")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    let { value } = e.target;
    fetch("https://devapi.wtfup.me/gym/places")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <>
      <div className="Search_main_div">
        <div className="Search_main_container">
          <AiOutlineSearch className="svg1" />
          <input
            className="search_bar"
            value={input}
            placeholder="search gym name here"
            onChange={handleChange}
          ></input>
          <HiLocationMarker className="svg2" />
          <button>reset</button>
        </div>
        <div className="Search_result_div">
          <SigleCard data={data} />
        </div>
      </div>
    </>
  );
};

export default Search;
