import React, { memo } from 'react';

import { getNextRestTime } from '../../logics';

import './Home.css';

interface HomeProps {
  handleEdit: () => any;
}

const Home: React.FC<HomeProps> = ({ handleEdit }) => {
  const nextRestTime = getNextRestTime();
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="clock" />
        <h1 className="home-heading">
          Your next break will be at <i className="bi bi-alarm"></i>{' '}
          {nextRestTime.format('HH:mm')}
        </h1>
        <h2 className="home-caption"> You have rested for 15 minutes today</h2>
        <button className="home-edit-btn" onClick={handleEdit}>
          Edit your settings
          <span className="scroll-arrow">&gt;</span>
          <span className="scroll-arrow">&gt;</span>
          <span className="scroll-arrow">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default memo(Home);
