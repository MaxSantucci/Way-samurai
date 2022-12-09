import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://thumbs.dreamstime.com/b/dream-scene-beautiful-palm-tree-over-white-sand-beach-summer-n-nature-view-41103701.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;