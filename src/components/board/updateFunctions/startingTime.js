const startingTime = (gameStatus, time, activateTimeCounter) => {
  if (gameStatus === "stopped" && time === 0) {
    window.intervalId = setInterval(() => activateTimeCounter(), 1000);
  }
};

export default startingTime;
