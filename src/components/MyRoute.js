import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import { Home } from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";

const MyRoute = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:ID/:bpath/:name" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRoute;
