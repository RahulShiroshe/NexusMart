import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
      <header className='header'>
        <div className='container-h d_flex'>
         <div className='navlink'>
            <ul className="link f_flex capitalize cartsy-menu-drawer" >
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
              <li>
                Account
              </li>
              <li>
                track my order
              </li>
              <li>
                Coupons
              </li>
              <li>
                My Notifications
              </li>
            </ul>
          </div>
        </div>
      </header>
  )
}

export default Navbar
