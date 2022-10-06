import React, { useEffect, useState } from "react";
import Url from "./Url";
import request from "./request";
import "./banner.css";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const getBanner = async () => {
      const background = await fetch(
        `${Url.baseURL}${request.fetchNetflixOriginals}`
      ).then((background) => background.json());
      setBanner(
        background.results[
          Math.floor(Math.random() * background.results.length - 1)
        ]
      );
    };
    getBanner();
  }, []);

  const overFlow = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(${Url.imageUrl}${banner?.backdrop_path})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {banner?.title || banner?.name || banner?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <p className="banner_description">
            {overFlow(banner?.overview, 150)}
          </p>
        </div>

        <div className="banner--fadebottom"></div>
      </header>
    </>
  );
};

export default Banner;
