// let rerenderEntrireTree = () => {
//   console.log("state changed");
// }

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", like: 23 },
      { id: 2, message: "It's my first post", like: 58 },
      { id: 3, message: "It's my first post", like: 158 },
      { id: 4, message: "It's my first post", like: 528 },
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Are you rigth?" },
      { id: 4, message: "Komon" },
      { id: 5, message: "Wandeful" },
    ],
    dialogs: [
      { id: 1, name: "Jarek", image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CQ3IrjZcisW-FO12jxRtSA9shZYuykqA2w&usqp=CAU" /> },
      { id: 2, name: "Muhamed", image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CQ3IrjZcisW-FO12jxRtSA9shZYuykqA2w&usqp=CAU" /> },
      { id: 3, name: "Vasya", image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" /> },
      { id: 4, name: "Artur", image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" /> },
      { id: 5, name: "Anton", image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" /> },
    ],
  },
}

// export let addPost = (postMessage) => {
//   let newPost = {
//     id: 5,
//     message: postMessage,
//     likesCount: 0
//   };

//   state.profilePage.posts.push(newPost);
//   rerenderEntrireTree(state);
// }


export default state;