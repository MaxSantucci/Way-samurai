import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return <div className={s.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU" />
    post 1
    <span>Like</span>
  </div>
}

export default Post;