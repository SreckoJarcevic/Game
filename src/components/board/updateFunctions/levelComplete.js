const levelComplete = (fields, level, boardProps) => {
  const { setModal, fieldsLeftCounter, setGameStatus } = boardProps;
  const notAllEmpty = fields.some(field => field.status !== "empty");
  const allFieldsClicked = fields.every(
    field => field.status !== "clickable" && field.status !== "nextClickable"
  );

  if (notAllEmpty && allFieldsClicked) {
    setModal({
      visible: true,
      content: `You completed level ${level}, do you want to continue?`
    });

    fieldsLeftCounter(0);
    fields.forEach(field => (field.status = "empty"));
    setGameStatus("stopped");
    clearInterval(window.intervalId);
  }
};

export default levelComplete;
