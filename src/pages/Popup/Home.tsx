import React, { memo } from 'react';
import moment from 'moment';

import { getNextRestTime } from '../../logics';

import './Home.css';

interface HomeProps {
  handleEdit: () => any;
}

const Home: React.FC<HomeProps> = ({ handleEdit }) => {
  const [nextRestTime, setNextRestTime] = React.useState(moment());

  React.useEffect(() => {
    const interval = setInterval(() => {
      getNextRestTime().then(setNextRestTime);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="clock" />
        <h1 className="home-heading">
          Your next break will be at <i className="bi bi-alarm"></i>{' '}
          {nextRestTime.format('HH:mm A')}
        </h1>
        <h2 className="home-caption">You have rested for 15 minutes today</h2>
        <button className="home-edit-btn mt-3" onClick={handleEdit}>
          <i className="bi bi-gear"></i>{' '}
          Settings
        </button>
      </div>
    </div>
  );
};

export default memo(Home);
