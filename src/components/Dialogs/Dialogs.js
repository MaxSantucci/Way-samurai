import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => <DialogItem image={d.image} name={d.name} id={d.id} />);

  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

  let newMessageElement = React.createRef()

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.sendMessage(text);
    newMessageElement.current.value = '';
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.dialog}>{props.message}</div>
        <div>
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;