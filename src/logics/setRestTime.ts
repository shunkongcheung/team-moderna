const setRestTime = () => {
  const now = new Date();
  chrome.storage.local.set({ REST_TIME: now.toString() });
};

export default setRestTime;
