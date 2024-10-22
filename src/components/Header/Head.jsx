import React from "react";
import styles from "./Head.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Head = () => {
  return (
    <section className={styles.head}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <a href='/'>
              <img src={logo} alt='' />
            </a>
          </div>
          <i className='fa fa-phone'/>
          <label className={styles.info}> +91 022 230 84259</label>
          <i className='fa fa-envelope'/>
          <label className={styles.info}> support@nexusmart.com</label>
        </div>
        <div className={styles.right}>
          <i className="fa-sharp fa-solid fa-messages-question"/>
          <label className={styles.info}><Link to='/Help' className={styles.link}>Theme FAQ's</Link></label>
          <i className="fa-sharp fa-solid fa-headset"/>
          <label className={styles.info}><Link to='/Help' className={styles.link}>Need Help</Link></label>
          <i className="fa-sharp fa-regular fa-globe"/>
          <label className={styles.info}>EN</label>
          <i className="fa-sharp-duotone fa-solid fa-dollar-sign"/>
          <label className={styles.info}>USD</label>
        </div>
      </div>
    </section>
  );
}

export default Head;