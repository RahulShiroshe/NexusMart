import React, {useState} from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem, LikeItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [MobileMenu, setMobileMenu] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
      <section className='search background'>
        <div className='container-h c_flex'>
          <div className='logo width'>
            <a href='/'> <img src={logo} alt='' /></a>
          </div>

          <form onSubmit={handleSubmit} className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search...' />
            <button type="submit" ><span>Search</span></button>
          </form>
          <div className='icon f_flex width'>
            <div className='user'>
              <Link to='/'>
               <i className='fa fa-user icon-circle'/>
              </Link>
            </div>
            {/* Like */}
            <div className='cart'>
              <Link to='/like'>
                <i className='fa fa-regular fa-heart icon-circle'/>
                <span>{LikeItem.length === 0 ? "" : LikeItem.length}</span>
              </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'/>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <div className='navlink '>
              <ul className={MobileMenu ? "cartsy-menu-drawer open" : "link f_flex capitalize cartsy-menu-drawer"} onClick={() => setMobileMenu(false)}>
                <li>
                  <Link >Account</Link>
                </li>
                <li>
                  <Link >Track My Order</Link>
                </li>
                <li>
                  <Link >Coupons</Link>
                </li>
                <li>
                  <Link >My Notifications</Link>
                </li>
              </ul>
              <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className='fas fa-times close home-btn'/> : <i className='fas fa-bars open'/>}
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Search
