import { useEffect, useState } from 'react';
import swiggyLogo from '../img/swiggy-logo.svg';




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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login' onClick={()=>setLoginButton(!loginButton)}>{loginButton?"login":"logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header