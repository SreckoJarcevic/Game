const firstLevelSetup = (level, setLevel, setLives) => {
  if (level === 0) {
    setLevel();
    setLives();
  }
};

export default firstLevelSetup;
