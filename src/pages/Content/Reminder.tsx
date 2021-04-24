import React, { memo } from 'react';
import './Reminder.css';
interface ReminderProps {}

const Reminder: React.FC<ReminderProps> = () => {
  return <>
    <div className="header">
      <div className="faceSpeechContainer">
        <div className="face">
          <i className="bi bi-hourglass-bottom"></i>
        </div>
        <div className="speechBubble">
          Take a break!
        </div>
      </div>
      <div className="timerContainer">
        <div className="time">
          <i className="bi bi-clock-history"></i> 05:23
        </div>
        <div className="controls">
          <i className="bi bi-play-circle-fill"></i>
          <i className="bi bi-stop-circle-fill"></i>
          <i className="bi bi-stop-circle-fill"></i>
        </div>
      </div>
    </div>
    <div className="numberOfBreaks">
      Hooray you've taken 5 breaks today!
    </div>
    <div className="quote">
      “Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.”
    </div>
    </>;
};

export default memo(Reminder);
