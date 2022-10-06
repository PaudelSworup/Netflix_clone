import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Url from "./Url";
import "./row.css";
const Fetch = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${Url.baseURL}${fetchUrl}`);
      const data = await response.json();
      setMovie(data.results);
      return data;
    };
    getData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
          {movie.map((mov, index) => {
            const {
              id,
              poster_path,
              backdrop_path,
              original_name,
              original_title,
            } = mov;
            return (
              <>
                {/* <div className="row_image"> */}
                <img
                  key={index}
                  onClick={() =>
                    navigate(
                      `/detail/${id}${backdrop_path}/${
                        original_name || original_title
                      }`
                    )
                  }
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${Url.imageUrl}${
                    isLargeRow ? poster_path : backdrop_path
                  }`}
                  alt=""
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fetch;
