import React from "react";
import "./styles.css";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded"; 

function Options() {
  return (
    <div className="options-container">
      <div className="options-list">
        <div className="option">
          <LeaderboardRoundedIcon style={{ marginRight: "8px" }} />
          <span className="option-text">Leaderboard</span>
        </div>
        <div className="option">
          <span className="material-symbols-outlined">arrow_drop_down</span>
          <span className="option-text">Historical Trading</span>
        </div>
        <div className="option">
          <span className="option-text">Historical Chart</span>
        </div>
        <div className="option">
          <span className="option-text">Scanners</span>
        </div>
        <div className="option">
          <span className="option-text">Alerts</span>
        </div>
        <div className="option">
          <span className="option-text">Basic Backtest</span>
        </div>
        <div className="option">
          <span className="option-text">Advanced Backtest</span>
        </div>
        <div className="option">
          <span className="option-text">Pricing</span>
        </div>
        <div className="option">
          <span className="option-text">My Earnings</span>
        </div>
      </div>
    </div>
  );
}

export default Options;
