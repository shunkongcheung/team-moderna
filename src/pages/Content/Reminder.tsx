import React, { memo, useEffect, useState } from 'react';
import { getRestMinute, setRestTime } from '../../logics';

import './Reminder.css';
interface ReminderProps {
  oldBackground: string;
}

const Reminder: React.FC<ReminderProps> = ({ oldBackground }) => {
  const [secondsLeft, setSecondsLeft] = useState(16);
//   const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

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

  // useEffect(() => {
  //   fetch("https://quotes.rest/")
  //     .then((results) => results.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  //   }, []);

  React.useEffect(() => {

      getRestMinute().then((result)=>{
        setSecondsLeft(result.restMinute)
        console.log(`ehllow ${result.restMinute}`)
        })

  }, []);

  let intervalId: any;
  useEffect(() => {

    // const num = getRestMinute();
    // console.log(`hey ennntering here ${num}`);
    
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
