import React from "react";
import loading from "../images/gif/loading-gear.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loading} alt="loadingGif" />
    </div>
  );
};

export default Loading;
