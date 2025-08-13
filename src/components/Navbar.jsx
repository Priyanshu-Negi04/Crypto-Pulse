import React, { useContext } from 'react';
import '../css/navbar.css'; 
import logo from '../../public/logo.png'; 
import arrow_icon from '../../public/arrow_icon.png'; 
import { CoinContext } from '../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const CurrencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Top Coins</li>
        <li>Price Alerts</li>
        <li>Resources</li>
        <li>News Feed</li>
      </ul>
      <div className="nav-right">
        <select onChange={CurrencyHandler} defaultValue="usd"> 
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Start Tracking <img src={arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
