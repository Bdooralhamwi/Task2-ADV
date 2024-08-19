import React from "react";
import { useState, useEffect } from "react";
import "./animation.css";
export default function Animation() {
  // console.log(props.name)
  const [dis, setdis] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setdis("block");
    }, 0);

    const hideTimeout = setTimeout(() => {
      setdis("none");
    }, 5500);

    // تنظيف التايم أوت عند إلغاء المكون
    return () => clearTimeout(hideTimeout);
  }, []);
  return (
    <div className="componantAnimation" style={{ display: dis }}>
      <h1 className="web">Villa</h1>
      <h2>Boudor Alhamwi</h2>
      <img
        src="/images/property-01.jpg"
        alt=""
        className="top-web"
        loading="lazy"
      />
      <img
        src="/images/property-02.jpg"
        alt=""
        className="top-right-web"
        loading="lazy"
      />
      <img
        src="/images/property-03.jpg"
        alt=""
        className="bottom-web"
        loading="lazy"
      />
      <img
        src="/images/property-04.jpg"
        alt=""
        className="bottom-right-web"
        loading="lazy"
      />
    </div>
  );
}
