import React, { memo } from 'react';
import './Reminder.css';
interface ReminderProps {}

const Reminder: React.FC<ReminderProps> = () => {
  return <div className="reminderModal">
    <div className="header">
      <div className="faceSpeechContainer">
        <div className="face">
          MARG
        </div>
        <div className="speechBubble">
          Take a break!
        </div>
      </div>
      <div className="timerContainer">
        <div className="time">
          05:23
        </div>
        <div className="controls">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
          P S
        </div>
      </div>
    </div>
    <div className="numberOfBreaks">
      Hooray you've taken 5 breaks today!
    </div>
    <div className="quote">
      “Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.”
    </div>
    </div>;
};

export default memo(Reminder);
