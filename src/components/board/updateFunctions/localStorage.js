const updatingLocalStorage = (level, lives) => {
  const usersMaxLevel = JSON.parse(localStorage.getItem("level"));

  //  Update max level if the current level is higher
  if (usersMaxLevel < level) {
    localStorage.setItem("level", JSON.stringify(level));
  }

  // Update users lives
  localStorage.setItem("lives", JSON.stringify(lives));
};

export default updatingLocalStorage;
