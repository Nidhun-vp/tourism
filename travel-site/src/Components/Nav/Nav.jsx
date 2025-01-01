import React, { useRef } from 'react';
import navCSS from './../Nav/Nav.module.css';

function Nav() {
  const menu = useRef();

  const MenuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };

  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">Trip4u<span>.</span></a>
      </div>
      <ul ref={menu} className={navCSS.navMenu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Trips</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Searches</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Popular Destinations</a></li>
      </ul>
      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search places"></input>
        </div>
        <div className={navCSS.CallBtn}>
          <i className="ri-phone-line"></i>
          <div>
            <p>+1 9696545460</p>
            <small>Call Your Travel Agent</small>
          </div>
        </div>
        <i className="ri-menu-2-line" id={navCSS.bars} onClick={MenuHandler}></i>
      </div>
    </div>
  );
}

export default Nav;
