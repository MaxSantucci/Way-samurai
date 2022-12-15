import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const setClass = ({ isActive }) => isActive ? s.active : s.dialogName

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <div className={s.dialogsAvatar}>{props.image}</div>
      <NavLink to={path} className={setClass}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;