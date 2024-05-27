import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

function Table() {
  const [slippage, setSlippage] = useState(0); 

  const handleSlippageChange = (event) => {
    setSlippage(parseFloat(event.target.value));
  };

  return (
    <div className="table-container">
        <div className="top-container">
      <div className="side-heading">Basic Backtest</div>
      <div className="slippage-dropdown">
        <label htmlFor="slippage">Slippage:</label>
        <select id="slippage" value={slippage} onChange={handleSlippageChange}>
          <option value={0}>0%</option>
          <option value={0.005}>0.5%</option>
          <option value={0.01}>1%</option>
        </select>
      </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Based on premium and strategy_name</td>
            <td> <div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.84</div></td>
            <td>132767.1</td>
            <td>108.38</td>
            <td>0.6</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>2</td>
            <td>strategy_name</td>
            <td> <div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.69</div></td>
            <td>208500.31</td>
            <td>140.5</td>
            <td>0.35</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wait and trade_Save</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.67</div></td>
            <td>70823.17</td>
            <td>64.33</td>
            <td>0.6</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>4</td>
            <td>iron condor</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.64</div></td>
            <td>88978.5</td>
            <td>69.35</td>
            <td>0.62</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>5</td>
            <td>strategy_name</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.59</div></td>
            <td>157335.75</td>
            <td>128.75</td>
            <td>0.62</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>6</td>
            <td>strategy_name</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.59</div></td>
            <td>157335.75</td>
            <td>128.75</td>
            <td>0.62</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Based on premium wit</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.57</div></td>
            <td>63852.65</td>
            <td>87.23</td>
            <td>0.48</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>8</td>
            <td>strategy_name</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.53</div></td>
            <td>194687.52</td>
            <td>131.19</td>
            <td>0.35</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
          <tr>
            <td>9</td>
            <td>strategy_name</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.44</div></td>
            <td>74852.97</td>
            <td>60.22</td>
            <td>0.57</td>
            <td>500</td>
            <td style={{color:"blue"}}>Buy</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Selling with re entr</td>
            <td><div className="icon-with-text"><TrendingUpRoundedIcon style={{ marginRight: "8px" ,color:"green" }} />0.31</div></td>
            <td>127095.7</td>
            <td>106.36</td>
            <td>0.61</td>
            <td>-</td>
            <td style={{color:"blue"}}>View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
