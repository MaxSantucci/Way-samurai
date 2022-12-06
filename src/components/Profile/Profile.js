import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src="https://thumbs.dreamstime.com/b/dream-scene-beautiful-palm-tree-over-white-sand-beach-summer-n-nature-view-41103701.jpg" />
    </div>
    <div>
      ava + descr
    </div>
    <MyPosts />
  </div>
}

export default Profile;