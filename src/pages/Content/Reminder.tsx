import React, { memo, useEffect, useState } from 'react';
import { setRestTime } from '../../logics';

import './Reminder.css';
interface ReminderProps {
  oldBackground: string;
}

const Reminder: React.FC<ReminderProps> = ({ oldBackground }) => {
  const [secondsLeft, setSecondsLeft] = useState(10);

  const unrenderSnow = (oldBackground: string) => {
    const elements = document.getElementsByClassName('snowflake');
    while (elements.length > 0) {
      (elements[0] as any).parentNode.removeChild(elements[0]);
    }
    document.body.style.background = oldBackground;
  };

  const unrenderModal = () => {
    const elements = document.getElementsByClassName('reminderModal');
    while (elements.length > 0) {
      (elements[0] as any).parentNode.removeChild(elements[0]);
    }
  };

  const handleClose = () => {
    unrenderSnow(oldBackground);
    unrenderModal();
    setRestTime();
  };

  let intervalId: any;
  useEffect(() => {
    console.log('hey ennntering here');
    intervalId = setInterval(() => {
      setSecondsLeft((left) => {
        const next = left - 1;

        // lets reset the time
        if (next <= 0) {
          setRestTime();
          handleClose();
          clearInterval(intervalId);
          intervalId = 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="header">
        <div className="faceSpeechContainer">
          <div className="face">
            <i className="bi bi-hourglass-bottom"></i>
          </div>
          <div className="speechBubble">Take a break!</div>
        </div>
        <div className="timerContainer">
          <div className="time">
            <i className="bi bi-clock-history"></i>
            {secondsLeft > 0 ? secondsLeft : <span>Complete!</span>}
          </div>
          <div className="controls">
            <i className="bi bi-play-circle-fill"></i>
            <i className="bi bi-stop-circle-fill"></i>
            <i className="bi bi-stop-circle-fill"></i>
          </div>
        </div>
      </div>
      <div className="numberOfBreaks">Hooray you've taken 5 breaks today!</div>
      <div className="quote">
        “Thou hast made us for thyself, O Lord, and our heart is restless until
        it finds its rest in thee.”
      </div>
    </>
  );
};

export default memo(Reminder);
