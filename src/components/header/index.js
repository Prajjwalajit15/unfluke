import React from "react";
import "./styles.css";
import unflukeLogo from "../../assets/cropped_unfluke_full.148e5bfc.png";
import bellIcon from "../../assets/bellicon.png"; // Ensure this matches the actual filename
import coin from "../../assets/coin.jpeg";
import monkeyIcon from "../../assets/monkey.jpg";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img 
          src={unflukeLogo} 
          alt="Unfluke logo" 
          className="logo" 
        />
      </div>
      <div className="icon-container">
        <img 
          src={bellIcon} 
          alt="notifications" 
          className="icon" 
        />
        <img 
          src={coin} 
          alt="coin" 
          className="icon" 
        />
        <img 
          src={monkeyIcon} 
          alt="user" 
          className="user-icon" 
        />
      </div>
    </header>
  );
}

export default Header;

