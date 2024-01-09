import React from "react"
import logo from "../../components/assets/images/logo.svg";

const Head = () => {
  return (
      <section className='head s-head'>
        <div className='container-h'>
          <div className='left '>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='' />
              </a>
            </div>
            <i className='fa fa-phone'/>
            <label className='h-info'> +91 022 230 84259</label>
            <i className='fa fa-envelope'/>
            <label className='h-info'> support@nexusmart.com</label>
          </div>
          <div className='right RText'>
            <label className='h-info'>Theme FAQ"s</label>
            <label className='h-info'>Need Helps</label>
            <i className="fa fa-flag" aria-hidden="true" style={{fontSize: "0.75rem"}}/>
            <label>EN</label>
              <i className="fa fa-flag" aria-hidden="true" style={{fontSize: "0.75rem"}}/>
            <label>USD</label>
          </div>
        </div>
      </section>
  )
}

export default Head
