import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const setClass = ({ isActive }) => isActive ? s.activeLink : s.item

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="./profile" className={setClass}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="./dialogs" className={setClass}>Messanges</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="./news" className={setClass}>News</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to="./music" className={setClass}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="./settings" className={setClass}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;