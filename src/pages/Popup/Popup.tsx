import React from 'react';

import Home from './Home';
import Form from './Form';

import { setRestTime } from '../../logics';

import './Popup.css';

enum Page {
  Home = 0,
  Form = 50,
}

const Popup = () => {
  const [page, setPage] = React.useState<Page>(Page.Home);

  React.useEffect(() => {
    // if no previous rest time. set now as previous rest time
    chrome.storage.local.get(['REST_TIME'], ({ REST_TIME }) => {
      if (!REST_TIME) setRestTime();
    });
  }, []);

  return (
    <div
      className="popup-container"
      style={{ transform: `translateX(-${page}%)` }}
    >
      <div className="popup-slide">
        <Home handleEdit={() => setPage(Page.Form)} />
      </div>
      <div className="popup-slide">
        <Form handleFinish={() => setPage(Page.Home)} />
      </div>
    </div>
  );
};

export default Popup;
