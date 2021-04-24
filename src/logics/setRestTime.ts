const setRestTime = () => {
  const now = new Date();
  window.localStorage.setItem('REST_TIME', now.toString());
};

export default setRestTime;
