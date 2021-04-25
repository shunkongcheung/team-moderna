import React, { memo, useEffect, useState } from 'react';
import { setRestTime } from '../../logics';

import './Reminder.css';
interface ReminderProps {
  oldBackground: string;
}
import { getRestMinute } from '../../logics';

const Reminder: React.FC<ReminderProps> = ({ oldBackground }) => {
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [isPaused, setIsPaused] = useState(true);

  const unrenderSnow = (oldBackground: string) => {
    const elements = document.getElementsByClassName('snowflake');
    while (elements.length > 0) {
      (elements[0] as any).parentNode.removeChild(elements[0]);
    }
    const foo = document.getElementsByClassName('shadow');
    while (foo.length > 0) {
      (foo[0] as any).parentNode.removeChild(foo[0]);
    }
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

  // React.useEffect(() => {
  //     getRestMinute().then((result)=>{
  //       console.log(result.restMinute)
  //       setSecondsLeft(result.restMinute)
  //       })
  // }, []);


  // useEffect(() => {
  //   console.log('hey ennntering here');
  //   intervalId = setInterval(() => {
  //     setSecondsLeft((left) => {
  //       const next = left - 1;

  //       // lets reset the time
  //       if (next <= 0) {
  //         setRestTime();
  //         handleClose();
  //         clearInterval(intervalId);
  //         intervalId = 0;
  //       }
  //       return next;
  //     });
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  let intervalId: any = React.useRef;
  const setResetTimer = (set: boolean) => {
    if(set) {
      intervalId.current = setInterval(() => {
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
    } else {
      console.log(`pause ${intervalId}`)
      clearInterval(intervalId.current);
    }
    setIsPaused(!set)
  }


  const handlePlay = () => {
    setResetTimer(true)
  }

  const handlePause = () => {
    console.log('pause')
    setResetTimer(false)
  }

  return (
    <>
      <div className="header">
        <div className="faceSpeechContainer">
          <div className="face">
            <i className="bi bi-hourglass-bottom"></i>
          </div>
          <div className="speechBubble">
            <h2>
              Take a break!
            </h2>
          </div>
        </div>
        <div className="timerContainer">
          <div className="time">
          <i className="bi bi-clock"></i>
            {((secondsLeft/60) > 0 && (secondsLeft/60) <= 9) ? '0' : ''}
            {(secondsLeft/60) > 0 ? `${Math.floor(secondsLeft / 60)}` : '00'}
            :
            {((secondsLeft%60) > 0 && (secondsLeft%60) <= 9) ? '0' : ''}
            {(secondsLeft%60) > 0 ? `${Math.floor(secondsLeft%60)}` : ':00'}
          </div>
          <div className="controls">
            <button onClick={handlePlay} disabled={!isPaused}>
              <i className="bi bi-play-circle-fill"></i>
            </button>
            <button onClick={handlePause} disabled={isPaused}> 
              <i className="bi bi-pause-circle-fill"></i>
            </button>
            <button onClick={handleClose}>
              <i className="bi bi-stop-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="numberOfBreaks">
        <p>
          Hooray🎉🎊! You've taken 5 breaks today!
        </p>
      </div>
      <div className="quote">
        “Thou hast made us for thyself, O Lord, and our heart is restless until
        it finds its rest in thee.”
      </div>
    </>
  );
};

export default memo(Reminder);
