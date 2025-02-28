import { useEffect, useState } from 'react';
import swiggyLogo from '../img/swiggy-logo.svg';
import { Link } from 'react-router-dom';




const Header = () => {

  
  const [loginButton, setLoginButton] = useState(false)

  useEffect(() => {
    console.log("useEffect is called")
  }, [])

  
  console.log("hedader rendered")
  console.log(loginButton)
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={swiggyLogo}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className='login' onClick={()=>setLoginButton(!loginButton)}>{loginButton?"login":"logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header