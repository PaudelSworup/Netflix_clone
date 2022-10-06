import React from "react";
import Banner from "./Banner";
import Fetch from "./Fetch";
import request from "./request";
export const Home = () => {
  return (
    <>
      <Banner />
      <Fetch
        title="Netflix Original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Fetch title="Trending Now" fetchUrl={request.fetchTrending} />
      <Fetch title="Popular" fetchUrl={request.fetchPopular} />
      <Fetch title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Fetch title="Now Playing" fetchUrl={request.fetchLatest} />
    </>
  );
};
