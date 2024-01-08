import React from "react"
import "./style.css"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box p-l-t'>
            <a href='/'>
                 <h1>NexusMart</h1>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon'>
              <div className='img'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box p-l-t'>
            <h2>About Us</h2>
            <ul>
              <li className='css-link'>
                <Link to='/'>Careers</Link>
              </li>
              <li className='css-link'>
               <Link to='/'>Careers</Link>
              </li>
              <li className='css-link'>
                <Link to='/'>Our Stores</Link>
              </li>
              <li className='css-link'>
                <Link to='/'>Our Cares</Link>
              </li>
              <li className='css-link'>
              <Link to='/'>Terms & Conditions</Link>
              </li>
              <li className='css-link'>
              <Link to='/'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className='box p-l-t'>
            <h2>Customer Care</h2>
            <ul>
              <li className='css-link'>
                <Link to='/'>Help Center </Link></li>
              <li className='css-link'>
                <Link to='/'>How to Buy </Link></li>
              <li className='css-link'>
                <Link to='/'>Track Your Order </Link></li>
              <li className='css-link'>
                <Link to='/'>Corporate & Bulk Purchasing </Link></li>
              <li className='css-link'>
                <Link to='/'>Returns & Refunds </Link></li>
            </ul>
          </div>
          <div className='box p-l-t'>
            <h2>Contact Us</h2>
            <ul>
              <li className='footer-info'>412, 3, Navjivan Soc, Lamington, Mumbai, Maharashtra 400008 </li>
              <li className='footer-info'>Email: support@nexusmart.com</li>
              <li className='footer-info'>Phone: +91 022 230 84259</li>
              <li className='footer-info'>Phone: +91 022 2589 4664</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
