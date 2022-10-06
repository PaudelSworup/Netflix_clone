import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import request from "./request";
import Url from "./Url";

const API_KEY = "445e238f9deedc5029d639e00c25d2ab";

const Detail = () => {
  const { ID, bpath, name } = useParams();
  const numID = Number(ID);
  const [detail, setDetail] = useState();
  const [vid, setVid] = useState();

  // const original = `${Url.baseURL}${request.fetchNetflixOriginals}`;
  // const trending = `${Url.baseURL}${request.fetchTrending}`;
  // const popular = `${Url.baseURL}${request.fetchPopular}`;
  // const toprated = `${Url.baseURL}${request.fetchTopRated}`;
  // const tv = `${Url.baseURL}/search/tv?api_key=${API_KEY}&query=${name}`;
  // const movies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`;
  const video = `${Url.baseURL}/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`;

  const tvvid = `${Url.baseURL}/tv/${ID}/season/01/episode/01/videos?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const getVideo = async () => {
      const moviesVideo = await fetch(video).then((res) => res.json());
      const tvVideo = await fetch(tvvid).then((res) => res.json());
      return Promise.all([moviesVideo.results, tvVideo.results]);
    };
    getVideo().then((data) => setVid(data));
    // const getData = async () => {
    //   const response = await fetch(
    //     original || trending || toprated || popular || tv || movies
    //   );
    //   const data = await response.json();
    //   setDetail(data.results);
    //   console.log(data.results);
    // };
    // getData();
  }, []);
  console.log(detail);
  console.log(vid);

  return (
    <>
      <div
        className="details"
        style={{
          backgroundImage: `url(${Url.imageUrl}${bpath})`,
          backgroundSize: "100% 100%",
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center center",
        }}
      ></div>
    </>
  );
};

export default Detail;
