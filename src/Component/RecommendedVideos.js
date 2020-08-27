import React from "react";
import "./RecommendedVideos.css";
import Video from "./Video";
const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <Video />
      </div>
    </div>
  );
};

export default RecommendedVideos;
