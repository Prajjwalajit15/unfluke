import React from "react";
import "./styles.css"
import videoFile from "../../assets/istockphoto-157963973-640_adpp_is.mp4";  

function Footer() {
  return (
    <div className="video-Container">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Footer;