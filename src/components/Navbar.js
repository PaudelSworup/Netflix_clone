import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else setScrolled(false);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [scrolled]);

  return (
    <>
      <div className={`navbar ${scrolled && "navblack"}`}>
        <div className="logo">
          <img src="../images/net.jpg" alt="" />
        </div>

        <div className="sign_in avatar">
          <img src="../images/av.png" alt="" />
          <button id="id1">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
