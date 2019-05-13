export const generateLevel = level => ({
  type: "GENERATE_LEVEL",
  payload: level
});

export const fieldClicked = field => ({
  type: "FIELD_CLICKED",
  payload: field
});
