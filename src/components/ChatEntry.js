import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';


const ChatEntry = ({ sender, body, timeStamp }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeMessage = () => {
    setIsLiked(!isLiked);
  };
  
  const likeDisplay = isLiked ? '❤️' : '🤍';
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className={likeDisplay} onClick={likeMessage}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
}; 

export default ChatEntry;
