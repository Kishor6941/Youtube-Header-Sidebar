import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import RecommendedVideos from "./Component/RecommendedVideos";

function App() {
  return (
    <div className="app">
      {/*header */}
      <Header />
      <div className="app__page">
        {/*sidebar */}
        <Sidebar />
        {/*RecommendedVideos */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
