import React from "react";
import "./styles.css"
import videoFile from "../../assets/istockphoto-979700540-640_adpp_is.mp4"; 

function Video() {
  return (
    <div className="video-Container2">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
