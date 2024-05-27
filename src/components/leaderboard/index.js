import React from "react";
import "./styles.css";
import Header from "../header";
import Options from "../Options";
import Table from "../Table";
import Video from "../video";
import Footer from "../footer";

function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <Header />
      <Options />
      <Video/>
      <h1>LeaderBoards</h1>
      <Table />
      <Footer/>
    </div>
  );
}

export default Leaderboard;
